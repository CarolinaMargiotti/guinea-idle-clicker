<script>
import Produce from "@/components/Produce.vue";
import { defineComponent } from "vue";
import { store } from "@/util/store";
export default defineComponent({
	name: "GuineaPigClicker",
	components: {
		Produce,
	},
	mounted() {
		store.earnIncome();
	},
	methods: {
		earnMoney(amount) {
			store.incrementMoney(amount);
		},
		updateProduction(productionName, productionValue) {
			store.updateIncome(productionName, productionValue);
		},
	},
	computed: {
		money() {
			return store.getMoney();
		},
	},
});
</script>

<template>
	<div class="grid grid-cols-2 justify-center items-center gap-4">
		<div>
			<h1 class="bg-yellow-950">porquinho da india</h1>
			<div class="w-28">
				<img src="../../public/guineapig.png" alt="guinea farmer" />
			</div>
			<p>{{ money }}</p>
		</div>
		<div class="min-content">
			<li class="produce min-content">
				<Produce
					:Produce="{
						name: 'Cucumber',
						quantity: 1,
						cost: 5,
						productionPerSecond: 3,
					}"
					@productionUpdate="updateProduction"
				></Produce>
			</li>
		</div>
	</div>
</template>
