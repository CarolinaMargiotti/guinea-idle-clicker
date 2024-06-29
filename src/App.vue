<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
	<header>
		<div class="mb-12">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/guinea">Guinea</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>
