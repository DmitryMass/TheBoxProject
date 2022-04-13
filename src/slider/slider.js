const slides = document.querySelectorAll(".main__slider");
const prev = document.querySelector(".back");
const next = document.querySelector(".next");
const sliderField = document.querySelector(".main__inner");
const slidesWrapper = document.querySelector(".main__wrapper");
const width = window.getComputedStyle(slidesWrapper).width;

let sliderIndex = 1;
let currentOffset = 0;

sliderField.style.width = 100 * slides.length + "%";

slides.forEach((slide) => {
  slide.style.width = width; //все слайды одинаковой ширины
});

next.addEventListener("click", () => {
  if (currentOffset == parseInt(width) * (slides.length - 1)) {
    // '500px'
    currentOffset = 0;
  } else {
    currentOffset += parseInt(width);
  }
  sliderField.style.transform = `translateX(-${currentOffset}px)`;
});

prev.addEventListener("click", () => {
  if (currentOffset == 0) {
    currentOffset = parseInt(width) * (slides.length - 1);
  } else {
    currentOffset -= parseInt(width);
  }
  sliderField.style.transform = `translateX(-${currentOffset}px)`;
});

next.addEventListener("mousedown", addClickTransform);
next.addEventListener("mouseup", removeClickTransform);
prev.addEventListener("mousedown", addClickTransform);
prev.addEventListener("mouseup", removeClickTransform);

function addClickTransform(e) {
  let clicker = e.currentTarget;
  clicker.classList.add("clicked");
}
function removeClickTransform(e) {
  let clicker = e.currentTarget;
  clicker.classList.remove("clicked");
}
