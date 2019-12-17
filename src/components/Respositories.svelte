<script>
    import { onMount } from "svelte";

    import Loader from './Loader.svelte'

    let repos = [];

    onMount(async function() {
        const response = await fetch('https://api.github.com/users/max-arias/repos?sort=pushed');
        const json = await response.json();
        repos = json.splice(0, 5);

        console.log('repos', repos); 
    });
</script>

<style></style>

<h1>Repositories here</h1>
