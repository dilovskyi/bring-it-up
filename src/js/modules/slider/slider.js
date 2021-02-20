export default class Slider {
	constructor({
		container = null,
		btnForward = null,
		btnBackward = null,
		next = null,
		prev = null,
		activeClass = "",
		animate = false,
		autoplay = false,
	} = {}) {
		this.container = document.querySelector(container);
		try {
			this.slides = this.container.children;
		} catch (e) {}
		this.btnForward = document.querySelectorAll(btnForward);
		this.btnBackward = document.querySelectorAll(btnBackward);
		this.next = document.querySelector(next);
		this.prev = document.querySelector(prev);
		this.activeClass = activeClass;
		this.animate = animate;
		this.autoplay = autoplay;
		this.slideIndex = 1;
	}
}
