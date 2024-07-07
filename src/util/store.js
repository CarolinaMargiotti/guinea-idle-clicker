import { reactive } from "vue";

export const store = reactive({
	money: 0,
	productions: {
		default: 1,
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
