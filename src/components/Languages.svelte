<script>
    import { onMount } from "svelte";
    import jsonp from 'jsonp'

    import Loader from './Loader.svelte'

    const languagesUsedLast30 = 'https://wakatime.com/share/@64b889a6-18f2-44e2-8192-24c1d569918b/4c0e3f27-6d59-4db3-be73-d8838fe714a4.json';
    const codingActivityLast30 = 'https://wakatime.com/share/@64b889a6-18f2-44e2-8192-24c1d569918b/02077329-8784-4967-afbc-d98c5f10274a.json';

    let languageData = [];
    let totalTimeSpent = 0;

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

                    console.log(languageData)
                }
            }
        });

        jsonp(codingActivityLast30, null, function(err, data) {
            if (err) {
                console.error(err.message);
            } else {
                if(data.data) {
                    Object.keys(data.data).forEach(key => {
                        if (data.data[key].grand_total.total_seconds) {
                            totalTimeSpent += data.data[key].grand_total.total_seconds;
                        }
                    });
                }
            }
        });
    });

    const wordConcat = item => {
        if (item.index === languageData.length - 1) {
            return '.';
        }

        if (item.index === languageData.length - 2) {
            return ' and';
        }
        
        return ','
    }

    const timespent = () => {
        // return {totalTimeSpentHours()} hours and {totalTimeSpentMinutes()} minutes
        return 'lalala'
    }

</script>

<style lang="postcss"></style>

<div class="my-work">
    <p>In the last month, I've worked on: {#if !languageData.length} <Loader /> {/if}</p>
    {#if languageData.length}
        {#each languageData as language}
            <span class="{language.name.toLowerCase()} text-xl">{language.name}{wordConcat(language)} </span>
        {/each}
    {/if}
    <p>Spending a total of {timespent()}.</p>
</div>

<div>projects down here</div>