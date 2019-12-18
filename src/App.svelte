<style>
	:global(body) {
		font-family: 'Roboto Slab', serif;
		background-color: #fdfffc;
	}

	:global(::selection) {
		background: #ff9f1c;
	}
	:global(::-moz-selection) {
		background: #ff9f1c;
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
		<div class="w-0 lg:w-1/6 h-12"></div>
		<div class="w-full lg:w-4/6 h-12 h-screen text-center flex align-center justify-center">
			<div class="content p-8 lg:p-0 lg:mt-0 flex flex-col items-center">
				<div class="flex flex-col lg:flex-row items-center lg:items-end justify-center">
					<h1 class="text-primary font-semibold text-10xl">Hey!</h1>
					<div class="text-3xl lg:text-6xl text-secondary leading-loose mr-12 lg:mr-0 -mt-14 lg:mt-0 lg:mb-4">I'm <span class="">Max</span></div>
				</div>
				<div class="text-secondary text-xl leading-none lg:-mt-12 lg:-ml-11 mt-4 lg:mt-0">
					<span class="lg:ml-12 lg:mr-12">I'm a full-stack web</span>
					<span> dev. <span class="flex lg:flex-none lg:inline mt-4 lg:mt-0 items-end lg:items-baseline leading-looseRem lg:leading-none">How can I help?
						<a class="text-3xl" target="_blank" href="https://github.com/max-arias/" alt="Github"><i class="lab la-github"></i></a>
						<a class="text-3xl" target="_blank" href="mailto:max@max-arias.com"><i class="las la-envelope-open"></i></a>
						<a class="text-3xl" target="_blank" href="https://www.linkedin.com/in/maxarias/"><i class="lab la-linkedin-in"></i></a>
					</span></span>
				</div>
				<br>
				<Languages />
				<br>
				<Repositories />
				<br>
				<Projects />
			</div>
		</div>
		<div class="w-0 lg:w-1/6 h-12"></div>
	</div>
</main>
