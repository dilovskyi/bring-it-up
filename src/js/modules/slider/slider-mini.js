import Slider from "./slider";

export default class MiniSlider extends Slider {
	constructor(container, next, prev, activeClass, animate, autoplay) {
		super(container, next, prev, activeClass, animate, autoplay);
	}

	decorizeSlides() {
		for (let slide of this.slides) {
			if (this.animate) {
				slide.querySelector(".card__title").style.opacity = "0.4";
				slide.querySelector(".card__controls-arrow").style.opacity = "0";
			}
			slide.classList.remove(this.activeClass);
		}

		if (this.animate) {
			this.slides[0].querySelector(".card__title").style.opacity = "1";
			this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
		}
		this.slides[0].classList.add(this.activeClass);
	}

	bindTriggers() {
		this.next.addEventListener("click", () => {
			this.scrollSlides("forward");
		});
		this.prev.addEventListener("click", () => {
			this.scrollSlides("backward");
		});
	}

	scrollSlides(direction) {
		const secondSlide = this.slides[1];
		const lastSlide = this.slides[this.slides.length - 1];

		if (direction === "forward") {
			this.container.append(this.slides[0]);
			if (secondSlide.tagName === "BUTTON") {
				this.scrollSlides("forward");
			} else {
				this.decorizeSlides();
			}
		}

		if (direction === "backward") {
			this.container.prepend(lastSlide);
			if (lastSlide.tagName === "BUTTON") {
				this.scrollSlides("backward");
			} else {
				this.decorizeSlides();
			}
		}
	}

	init() {
		try {
			this.container.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items:
    flex-start;`;

			this.bindTriggers();
			this.decorizeSlides();

			if (this.autoplay) {
				setInterval(() => {
					this.scrollSlides("forward");
				}, 5000);
			}
		} catch (e) {}
	}
}
