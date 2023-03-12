const carouselImages = document.querySelectorAll(".carousel-slide");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const dotsContainer = document.querySelector(".dots-wrapper");

let counter = 0;
let slideLenght = carouselImages.length;

createDots();
const dots = document.querySelectorAll(".dot");

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  counter = (counter + 1) % slideLenght;
  updatePosition();
}

function prevSlide() {
  counter = (counter - 1 + slideLenght) % slideLenght;

  updatePosition();
}

function updatePosition() {
  carouselImages.forEach((image) => {
    image.classList.add("hidden");
    image.classList.remove("active-img");
  });
  carouselImages[counter].classList.remove("hidden");
  carouselImages[counter].classList.add("active-img");

  dots.forEach((dot) => dot.classList.remove("dot-active"));
  dots[counter].classList.add("dot-active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    counter = index;
    updatePosition();
  });
  if (index === 0) dot.classList.add("dot-active");
});

function createDots() {
  carouselImages.forEach((slide) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  });
}
setInterval(() => {
  counter = (counter + 1) % slideLenght;
  updatePosition();
}, 3000);
