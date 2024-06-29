<script setup>
import Produce from "@/components/Produce.vue";
</script>

<template>
	<div class="grid grid-cols-2 justify-center items-center">
		<div>
			<div class="bg-yellow-950">porqinhodaindia</div>
			<div class="w-28">
				<img src="../../public/guineapig.png" alt="guinea farmer" />
			</div>
		</div>
		<div class="min-content">
			<li class="produce min-content">
				<Produce produceName="Cucumber"></Produce>
			</li>
		</div>
	</div>
</template>
