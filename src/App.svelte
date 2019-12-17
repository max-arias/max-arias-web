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
</style>

<script>
	import { onMount } from 'svelte'
	import Languages from './components/Languages.svelte';
	import Projects from './components/Projects.svelte';
	import Repositories from './components/Respositories.svelte'
</script>

<main class="w-screen h-screen">
	<div class="flex align-center">
		<div class="w-0 sm:w-1/6 h-12"></div>
		<div class="w-full sm:w-4/6 h-12 h-screen text-center flex align-center justify-center">
			<div class="content p-8 sm:p-0 sm:mt-16 flex flex-col items-center">
				<div class="flex flex-col sm:flex-row items-center sm:items-end justify-center">
					<h1 class="text-primary font-semibold text-10xl">Hey!</h1>
					<div class="text-3xl sm:text-6xl text-secondary leading-loose mr-12 sm:mr-0 -mt-14 sm:mt-0 sm:mb-4">I'm Max</div>
				</div>
				<div class="text-secondary text-xl leading-none sm:-mt-11 sm:-ml-11 mt-4 sm:mt-0">
					<span class="sm:ml-12 sm:mr-12">I'm a full-stack web</span>
					<span> dev. <span class="flex sm:flex-none sm:inline mt-4 sm:mt-0 items-end sm:items-baseline leading-looseRem sm:leading-none">How can I help?
						<a class="text-3xl" target="_blank" href="https://github.com/max-arias/" alt="Github"><i class="lab la-github"></i></a>
						<a class="text-3xl" target="_blank" href="mailto:max@max-arias.com"><i class="las la-envelope-open"></i></a>
						<a class="text-3xl" target="_blank" href="https://www.linkedin.com/in/maxarias/"><i class="lab la-linkedin-in"></i></a>
					</span></span>
				</div>
				<!-- <br>
				<Languages />
				<br>
				<Repositories />
				<br>
				<Projects /> -->
			</div>
		</div>
		<div class="w-0 sm:w-1/6 h-12"></div>
	</div>
</main>
