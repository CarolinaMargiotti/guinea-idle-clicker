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
	<div>
		{{ produceName }}
		<img class="w-14" :src="produceImage" :alt="produceName" />
	</div>
</template>
