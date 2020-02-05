<style>
	:global(body) {
		font-family: 'Roboto Slab', serif;
		background-color: #ffffff;
	}

	:global(::selection) {
		background: #ff9f1c;
	}
	:global(::-moz-selection) {
		background: #ff9f1c;
	}

	#main-container {
		background-color: #002222;
	}
</style>

<script>
	import Tailwindcss from './Tailwind.svelte';
	import { onMount } from 'svelte'
	import Languages from './components/Languages.svelte';

	onMount(async () => {
		VANTA.TOPOLOGY({
			el: "#main-container",
			mouseControls: false,
			touchControls: false,
			minHeight: 200.00,
			minWidth: 200.00,
			scale: 1.00,
			scaleMobile: 1.00
		})
	});
</script>

<main class="w-screen h-screen" id="main-container">
	<div class="flex items-center">
		<div class="w-full h-12 h-screen text-center flex items-center justify-center">
			<div class="content p-8 lg:p-0 lg:mt-0 flex flex-col items-center">
				<div class="flex flex-col lg:flex-row items-center lg:items-end justify-center">
					<h1 class="text-primary font-semibold text-10xl">Hey!</h1>
					<div class="text-3xl lg:text-6xl text-secondary leading-loose mr-12 lg:mr-0 -mt-16 lg:mt-0 lg:mb-4">I'm <span class="">Max</span></div>
				</div>
				<div class="text-secondary text-xl leading-none lg:-mt-custom-3.2 lg:-ml-11 mt-4 lg:mt-0 mb-4">
					<span class="lg:ml-custom-4.5 lg:mr-12">I'm a full-stack web</span>
					<span> dev. <span class="flex lg:flex-none lg:inline mt-4 lg:mt-0 items-end lg:items-baseline leading-looseRem lg:leading-none">How can I help?
						<a class="text-3xl" rel="noopener" target="_blank" href="https://github.com/max-arias/" alt="Github repository"><i class="lab la-github"></i></a>
						<a class="text-3xl" rel="noopener" target="_blank" href="mailto:max@max-arias.com" alt="Email"><i class="las la-envelope-open"></i></a>
						<a class="text-3xl" rel="noopener" target="_blank" href="https://www.linkedin.com/in/maxarias/" alt="Linked In"><i class="lab la-linkedin-in"></i></a>
						<a class="text-3xl" rel="noopener" target="_blank" href="https://docs.google.com/document/d/1jMSCf--FFsMnsexGzTLq5luQsuyOw96XYvLsLNeb72U/edit?usp=sharing" alt="Resume"><i class="lar la-address-card"></i></a>
					</span></span>
				</div>
				<hr class="border-gray-600 w-1/2">
				<Languages />
			</div>
		</div>
	</div>
</main>

