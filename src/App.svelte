<style lang="postcss">
	body, html {
		font-family: 'Roboto Slab', serif;
	}
</style>

<script>
	import Languages from './components/Languages.svelte';
</script>

<main class="flex">
  <div class="w-1/5 bg-gray-500 h-12"></div>
  <div class="w-3/5 bg-gray-400 h-12">
	<h1>Hey! I'm Max</h1>
	<p>I'm a full-stack web developer. How can I help?</p>
	<Languages />
  </div>
  <div class="w-1/5 bg-gray-500 h-12"></div>
</main>