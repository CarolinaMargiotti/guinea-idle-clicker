import { reactive } from "vue";

export const store = reactive({
	money: 0,
	productions: [],
	incrementMoney(amount) {
		this.money += amount;
	},
	decrementMoney(amount) {
		this.money -= amount;
	},
});
