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

<div class="w-1/2 mt-8">
    <div class="text-lg text-secondary mb-2">The last things I've worked on are...</div>
    <div class="flex justify-center -mx-2 flex-wrap">
        {#if repos.length}
            {#each repos as repo}
                <div class="rounded w-5/12 mx-2 mb-2 text-left border-solid border-2 rounded border-gray-600 p-4">
                    <p><a href="{repo.html_url}" target="_blank"><i class="lab la-github"></i> {repo.name}</a></p>
                    <hr>
                    <p>{repo.description || "N/A"}</p>
                </div>
            {/each}
        {/if}
    </div>
</div>
