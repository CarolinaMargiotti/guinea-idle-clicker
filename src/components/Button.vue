<template>
	<button @click="onClick">
		<slot></slot>
	</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "Button",
	methods: {
		onClick() {
			this.$emit("clicked");
		},
	},
});
</script>
