import { reactive } from "vue";

export const store = reactive({
	money: 0,
	productions: {
		default: 1,
	},
	earnIncome() {
		setInterval(() => {
			Object.values(this.productions).forEach((value) => {
				this.incrementMoney(value);
			});
		}, 1000);
	},
	updateIncome(productionName, productionValue) {
		this.productions[productionName] = productionValue;
	},
	incrementMoney(amount) {
		this.money += amount;
	},
	decrementMoney(amount) {
		this.money -= amount;
	},
	getMoney() {
		return this.money;
	},
});
