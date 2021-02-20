export default class Form {
	constructor(forms) {
		this.forms = document.querySelectorAll(forms);
		this.inputs = document.querySelectorAll("input");
		this.message = {
			loading: "Загрузка...",
			success: "Спасибо! Скоро мы с Вами свяжемся",
			failure: "Что-то пошло не так...",
		};
		this.path = "assets/question.php";
	}

	cleatInputs() {
		this.inputs.forEach((item) => {
			item.value = "";
		});
	}

	mask() {
		const setCursorPosition = (pos, elem) => {
			elem.focus();
			if (elem.setSelectionRange) {
				elem.setSelectionRange(pos, pos);
			} else if (elem.createTextRange) {
				let range = elem.createTextRange();
				range.collapse(true);
				range.moveStart("charecter", pos);
				range.moveEnd("charecter", pos);
				range.select();
			}
		};

		function createMask(event) {
			let i = 0;
			const matrix = "+1 (___)___-___";
			const def = matrix.replace(/\D/g, "");
			let val = this.value.replace(/\D/g, "");
			if (val.length <= def.length) {
				val = def;
			}

			this.value = matrix.replace(/./g, function (a) {
				if (/[_\d]/.test(a) && i < val.length) {
					return val.charAt(i++);
				} else if (i >= val.length) {
					return "";
				} else {
					return a;
				}
			});

			if (event.type == "blur") {
				if (this.value.length == 2) {
					this.value = "";
				} else {
					setCursorPosition(this.value.length, this);
				}
			}
		}

		let inputs = document.querySelectorAll('[name="phone"]');
		inputs.forEach((item) => {
			item.addEventListener("input", createMask);
			item.addEventListener("focus", createMask);
		});
	}

	checkMailInputs() {
		const txtInputs = document.querySelectorAll('[type="email"]');

		txtInputs.forEach((item) => {
			item.addEventListener("keypress", (e) => {
				if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
					e.preventDefault();
				}
			});
		});
	}
	async postData(url, data) {
		const res = await fetch(url, {
			method: "POST",
			body: data,
		});
		return await res.text();
	}

	init() {
		this.mask();
		this.checkMailInputs();
		const { loading, success, failure } = this.message;
		this.forms.forEach((item) => {
			item.addEventListener("submit", (e) => {
				e.preventDefault();

				const statusMessage = document.createElement("div");
				statusMessage.style.cssText = `
        margin-top: 15px;
        font-size: 15px;
        color: grey;
        `;
				item.parentNode.append(statusMessage);
				statusMessage.textContent = loading;

				const formData = new FormData(item);
				this.postData(this.path, formData)
					.then((response) => {
						statusMessage.textContent = success;
						console.log(response);
					})
					.catch(() => {
						statusMessage.textContent = failure;
					})
					.finally(() => {
						this.cleatInputs();
						setTimeout(() => {
							statusMessage.remove();
							this.cleatInputs();
						}, 5000);
					});
			});
		});
	}
}
