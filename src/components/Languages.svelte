<script>
    import { onMount } from "svelte";
    import jsonp from 'jsonp'

    import Loader from './Loader.svelte'

    const languagesUsedLast7 = 'https://wakatime.com/share/@64b889a6-18f2-44e2-8192-24c1d569918b/051d9b50-20fc-450a-b542-06a0572ebf3f.json';
    const languagesUsedLast30 = 'https://wakatime.com/share/@64b889a6-18f2-44e2-8192-24c1d569918b/4c0e3f27-6d59-4db3-be73-d8838fe714a4.json';

    let languageData = [];
    let days = 30;

    const fetchLanguages = async (days) => {
        const fetchUrl = (days === 30) ? languagesUsedLast30 : languagesUsedLast7;

        return new Promise((resolve, reject) => {
            jsonp(fetchUrl, null, function(err, data) {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    if(data.data) {
                        let res = Object.keys(data.data).map( (item, index) => ({ name: data.data[item].name, percent: data.data[item].percent, index }));
                        res = res.sort(function(a, b) {
                            return b.percent - a.percent;
                        })
                        res = res.filter(item => item.name !== 'Other');
                        res = res.splice(0, 5);

                        res = res.map(item => item.name);
                        resolve(res);
                    }
                }
            });
        })
    }

    onMount(async () => {
        languageData = await fetchLanguages();
    });

    const buildLanguages = () => {
        const langStr = languageData.slice(0, languageData.length - 1).join(', ') + ` and ${languageData[languageData.length - 1]}`

        return `<span class="text-xl pl-1 text-secondary">${langStr}</span>`;
    }
</script>

<div class="w-1/2 mt-4">
    <div class="text-lg text-secondary">In the last {days} days, I've worked with:</div>
    {#if languageData.length}
        <div class="flex justify-center -mx-2 flex-wrap">{@html buildLanguages()}</div>
    {:else}
        <Loader />
    {/if}
    
</div>
