<script>
import Produce from "@/components/Produce.vue";
import { defineComponent } from "vue";
import { store } from "@/util/store";
import { Productions } from "@/interfaces/Productions";
export default defineComponent({
	name: "GuineaPigClicker",
	components: {
		Produce,
	},
	mounted() {
		store.earnIncome();
	},
	data() {
		return {
			productionsList: Productions,
		};
	},
	computed: {
		money() {
			return store.getMoney();
		},
	},
	methods: {
		earnMoney(amount) {
			store.incrementMoney(amount);
		},
		updateProduction(productionName, productionValue) {
			store.updateIncome(productionName, productionValue);
		},
		buyProduce(productionName, productionValue, productionCost) {
			store.decrementMoney(productionCost);
			this.updateProduction(productionName, productionValue);
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
				<div v-for="(item, index) in productionsList" :key="index">
					<Produce
						:produce="{
							name: item.name,
							quantity: item.quantity,
							cost: item.cost,
							productionPerSecond: item.productionPerSecond,
						}"
						:moneyAvailable="money"
						@productionUpdate="buyProduce"
					></Produce>
				</div>
			</li>
		</div>
	</div>
</template>
