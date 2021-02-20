export default class Difference {
	constructor(oldOfficer, newOfficer, items) {
		try {
			this.oldOfficer = document.querySelector(oldOfficer);
			this.newOfficer = document.querySelector(newOfficer);
			this.oldItems = this.oldOfficer.querySelectorAll(items);
			this.newItems = this.newOfficer.querySelectorAll(items);
			this.oldCounter = 0;
			this.newCounter = 0;
		} catch (e) {}
	}
	hideItems(items) {
		items.forEach((item, i, arr) => {
			if (i !== arr.length - 1) {
				item.style.display = "none";
			}
		});
	}

	bindTriggers(column, items, counter) {
		column.querySelector(".plus").addEventListener("click", (e) => {
			items[counter].style.display = "flex";

			if (counter !== items.length - 2) {
				counter++;
			} else {
				items[counter + 1].remove();
			}
		});
	}

	init() {
		try {
			this.hideItems(this.oldItems);
			this.hideItems(this.newItems);
			this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
			this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
		} catch (error) {}
	}
}
