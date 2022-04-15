const sliderContainer = document.querySelector(".slider-container");
const rightSlide = document.querySelector(".right-slide");
const leftSlide = document.querySelector(".left-slide");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const NumberOfSlides = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(NumberOfSlides - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > NumberOfSlides - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = NumberOfSlides - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHight
  }px)`;

  leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHight}px)`;
};
