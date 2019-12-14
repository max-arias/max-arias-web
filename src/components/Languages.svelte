<script>
    import { onMount } from "svelte";
    import jsonp from 'jsonp'

    import Loader from './Loader.svelte'

    const languagesUsedLast30 = 'https://wakatime.com/share/@64b889a6-18f2-44e2-8192-24c1d569918b/051d9b50-20fc-450a-b542-06a0572ebf3f.json';
    let languageData = [];

    onMount(function() {
        jsonp(languagesUsedLast30, null, function(err, data) {
            if (err) {
                console.error(err.message);
            } else {
                if(data.data) {
                    languageData = Object.keys(data.data).map( (item, index) => ({ name: data.data[item].name, percent: data.data[item].percent, index }));
                    languageData = languageData.sort(function(a, b) {
                        return b.percent - a.percent;
                    })
                    languageData = languageData.filter(item => item.name !== 'Other');
                    languageData = languageData.splice(0, 5);
                }
            }
        });
    });

    const wordConcat = item => {
        if (item.index === languageData.length) {
            return '. ';
        }

        if (item.index === languageData.length - 2) {
            return ' and ';
        }
        
        return ', '
    }

</script>

<style>
    .languages-used {
        padding-left: 24px;
    }
</style>

<div class="languages-used text-secondary flex flex-col mt-8">
    <div clas="w-full flex flex-row">
        <span class="text-lg">In the <span class="underline">7</span> days, I've worked on: {#if !languageData.length} <Loader /> {/if}</span>
        {#if languageData.length}
            {#each languageData as language}
                <span class="{language.name.toLowerCase()} text-xl pl-1">{language.name}{wordConcat(language)} </span>
            {/each}
        {/if}
    </div>
</div>
