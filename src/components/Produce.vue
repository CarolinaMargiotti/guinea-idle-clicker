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
				productionPerSecond: Number,
			},
			required: true,
			default: {
				name: "Cucumber",
				quantity: 0,
				cost: 5,
				productionPerSecond: 3,
			},
		},
	},
	data() {
		return {
			name: "",
			quantity: 0,
			cost: 5,
			productionPerSecond: 3,
		};
	},
	mounted() {
		this.name = this.produce.name;
		this.quantity = this.produce.quantity;
		this.cost = this.produce.cost;
		this.productionPerSecond = this.produce.productionPerSecond;
	},
	computed: {
		produceImage() {
			if (!this.name) return "";
			return `../../../public/${this.name}.png`;
		},
	},
	methods: {
		buyProduction() {
			this.quantity += 1;
			this.cost *= 1.5;
			this.productionPerSecond = this.quantity * 1.5;
			this.$emit("productionUpdate", this.productionPerSecond);
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
			<p>Production per second: {{ productionPerSecond }}</p>
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
