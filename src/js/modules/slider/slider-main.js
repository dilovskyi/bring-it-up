import Slider from "./slider";

export default class MainSlider extends Slider {
	constructor(btnForward, btnBackward) {
		super(btnForward, btnBackward);
	}
	showSlides(n) {
		for (let i of this.slides) {
			i.style.display = "none";
		}
		if (n > this.slides.length) {
			this.slideIndex = 1;
		} else if (n < 1) {
			this.slideIndex = this.slides.length;
		}

		this.slides[this.slideIndex - 1].style.display = "block";
	}

	changeSlider(btns, pos) {
		btns.forEach((item) => {
			item.addEventListener("click", () => {
				this.showSlides((this.slideIndex += pos));
				if (this.slideIndex === 3) {
					try {
						this.hanson = document.querySelector(".hanson");
						this.hanson.style.opacity = "0";
						setTimeout(() => {
							this.hanson.style.opacity = "1";
						}, 3000);
					} catch (error) {}
				}
			});
			if (btns == this.btnForward) {
				item.parentNode.previousElementSibling.addEventListener("click", (e) => {
					e.preventDefault();
					this.slideIndex = 1;
					this.showSlides(this.slideIndex);
				});
			}
		});
	}

	render() {
		if (this.container) {
			this.showSlides(this.slideIndex);
			this.changeSlider(this.btnForward, 1);
			this.changeSlider(this.btnBackward, -1);
		}
	}
}
