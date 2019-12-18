<script>
    let repos = [
        {
            name: 'Lorem',
        },
        {
            name: 'Ipsum',
        },
        {
            name: 'Dolor',
        },
    ];
</script>

<div class="w-1/2 mt-8">
    <div class="text-lg text-secondary mb-2">and my latest projects were...</div>
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
