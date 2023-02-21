const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderButtonLeft = document.querySelector(".slider-button-left");
const sliderButtonRight = document.querySelector(".slider-button-right");
let counter = 0;
const size = sliderItems[0].clientWidth;

slider.style.transform = "translateX(" + -size * counter + "px)";

sliderButtonRight.addEventListener("click", () => {
	if (counter >= sliderItems.length - 1) return;
	slider.style.transition = "transform 0.5s ease-in-out";
	counter++;
	slider.style.transform = "translateX(" + -size * counter + "px)";
});

sliderButtonLeft.addEventListener("click", () => {
	if (counter <= 0) return;
	slider.style.transition = "transform 0.5s ease-in-out";
	counter--;
	slider.style.transform = "translateX(" + -size * counter + "px)";
});

slider.addEventListener("transitionend", () => {
	if (sliderItems[counter].classList.contains("last-clone")) {
		slider.style.transition = "none";
		counter = sliderItems.length - 2;
		slider.style.transform = "translateX(" + -size * counter + "px)";
	}
	if (sliderItems[counter].classList.contains("first-clone")) {
		slider.style.transition = "none";
		counter = sliderItems.length - counter;
		slider.style.transform = "translateX(" + -size * counter + "px)";
	}
});
