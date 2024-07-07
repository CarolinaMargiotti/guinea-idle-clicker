<script>
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
	name: "Produce",
	components: { Button },
	props: {
		produce: {
			type: {
				name: String,
				quantity: Number,
				cost: Number,
				moneyTurnOver: Number,
				productionTime: Number,
			},
			required: true,
		},
		moneyAvailable: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			name: "",
			quantity: 1,
			cost: 5,
			moneyTurnOver: 3,
			productionTime: Number,
		};
	},
	mounted() {
		this.setDataFromProps();
		this.earnProduction();
	},
	computed: {
		produceImage() {
			if (!this.name) return "";
			return `../../../public/${this.name}.png`;
		},
	},
	methods: {
		buyProduction() {
			if (this.moneyAvailable < this.cost) {
				alert("not enough money");
				return;
			}

			this.moneyTurnOver = this.quantity * 1.5;
			this.quantity += 1;
			this.cost *= 1.5;
			this.productionTime *= 0.7;
		},
		setDataFromProps() {
			this.name = this.produce.name;
			this.quantity = this.produce.quantity;
			this.cost = this.produce.cost;
			this.moneyTurnOver = this.produce.moneyTurnOver;
			this.productionTime = this.produce.productionTime;
		},
		earnProduction() {
			if (this.quantity == 0) return;
			setInterval(() => {
				this.$emit("moneyEarned", this.moneyTurnOver);
			}, this.productionTime);
		},
	},
});
</script>

<template>
	<Button @clicked="buyProduction()">
		<div
			class="hoverEffect bg-orange-800 p-3 border-solid border-orange-600 border-4 rounded cursor-pointer"
		>
			{{ name }}
			<img class="w-14" :src="produceImage" :alt="name" />
			<p>Quantity: {{ quantity }}</p>
			<p>Cost: {{ cost }}</p>
			<p>Production per second: {{ moneyTurnOver }}</p>
		</div>
	</Button>
</template>

<style scoped>
.hoverEffect {
	transition: all 0.3s;
}

.hoverEffect:hover {
	transform: scale(1.1);
}
</style>
