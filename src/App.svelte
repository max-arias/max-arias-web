<style lang="postcss">
	body, html {
		font-family: 'Roboto Slab', serif;
		background-color: #f7fff7;
	}

	::selection {
		background: #ff6b6b;
	}
	::-moz-selection {
		background: #ff6b6b;
	}

	.welcome {
		line-height: 10rem;
	}

	.subtitle {
		margin-top: -40px;
		margin-left: -45px;
	}
</style>

<script>
	import { onMount } from 'svelte'
	import Languages from './components/Languages.svelte';
	import Projects from './components/Projects.svelte';
</script>

<main class="w-screen h-screen">
	<div class="flex align-center">
		<div class="w-0 sm:w-2/6 h-12"></div>
		<div class="w-full sm:w-2/6 h-12 h-screen text-center flex align-center justify-center">
			<div class="content p-8 sm:p-0 flex flex-col items-center">
				<div class="flex flex-col sm:flex-row items-center sm:items-end justify-center">
					<h1 class="text-primary font-semibold text-10xl">Hey!</h1>
					<div class="text-6xl text-secondary welcome">I'm Max</div>
				</div>
				<p class="subtitle text-secondary text-xl"><span class="pr-2 sm:pr-20">I'm a full-stack web</span><span> dev. <span>How can I help?</span></span></p>
				<br>
				<Languages />
				<br>
				<Projects />
			</div>
		</div>
		<div class="w-0 sm:w-2/6 h-12"></div>
	</div>
</main>
