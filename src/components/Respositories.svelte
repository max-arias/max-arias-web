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

<div class="">
    <div class="flex justify-between -mx-2 flex-wrap">
        {#if repos.length}
            {#each repos as repo}
                <div class="w-5/12 mx-2 mb-2">
                    <div class="text-left h-12 border-solid border-2 rounded border-gray-600 overflow-hidden">
                        <i class="lab la-github"></i>
                        <span><a href="{repo.html_url}" target="_blank">{repo.name}</a></span>
                        <span>{repo.description}</span>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>
