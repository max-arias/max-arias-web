<style lang="postcss">
	body, html {
		font-family: 'Roboto Slab', serif;
	}

	::selection {
		background: #ff6b6b;
	}
	::-moz-selection {
		background: #ff6b6b;
	}
</style>

<script>
	import { onMount } from 'svelte'
	import Languages from './components/Languages.svelte';
</script>

<main class="w-screen h-screen">
	<div class="flex align-center">
		<div class="w-1/5 h-12"></div>
		<div class="w-3/5 h-12 h-screen text-center flex align-center justify-center">
			<div class="content">
				<h1 class="text-primary font-semibold text-10xl">Hey!</h1>
				<div class="text-6xl text-secondary">I'm Max</div>
				<p class="subtitle">I'm a full-stack web developer. How can I help?</p>
				<br>
				<Languages />
			</div>
		</div>
		<div class="w-1/5 h-12"></div>
	</div>
</main>
