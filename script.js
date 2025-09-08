const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndecator = document.querySelector(".slider-indicator");

// Update the indicator height
const updateIndicator = (tab, index) => {
  sliderIndecator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
  sliderIndecator.style.width = `${tab.getBoundingClientRect().width}px`;
};
// Initialize swiper instance
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  // autoplay: { delay: 4000 },
  on: {
    // Update pagination on slide change
    slideChange: () => {
      const currenctTabIndex = [...sliderTabs].indexOf(
        sliderTabs[swiper.activeIndex]
      );
      updateIndicator(sliderTabs[swiper.activeIndex], currenctTabIndex);
    },
  },
});

// Update the slide and indicator on tab click
sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index);
    updatePagination(tab, index);
  });
});

updateIndicator(sliderTabs[0], 0);
window.addEventListener("resize", () =>
  updateIndicator(sliderTabs[swiper.activeIndex], 0)
);
