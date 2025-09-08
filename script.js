const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndecator = document.querySelector(".slider-indicator");

const updatePagination = (tab, index) => {
  sliderIndecator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
};
// Initialize swiper instance
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  // autoplay: { delay: 4000 },
});

sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index);
    updatePagination(tab, index);
  });
});
