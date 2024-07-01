<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "Produce",
	props: {
		produceName: {
			type: String,
			required: true,
			default: "Cucumber",
		},
	},
	computed: {
		produceImage() {
			if (!this.produceName) return "";
			return `../../../public/${this.produceName}.png`;
		},
	},
});
</script>

<template>
	<div
		class="hoverEffect bg-orange-800 p-3 border-solid border-orange-600 border-4 rounded cursor-pointer"
	>
		{{ produceName }}
		<img class="w-14" :src="produceImage" :alt="produceName" />
	</div>
</template>

<style scoped>
.hoverEffect {
	transition: all 0.3s;
}

.hoverEffect:hover {
	transform: scale(1.1);
}
</style>
