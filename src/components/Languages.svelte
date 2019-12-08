<script>
    import { onMount } from "svelte";
    import jsonp from 'jsonp'

    const wakatimeProfile = 'https://wakatime.com/share/@64b889a6-18f2-44e2-8192-24c1d569918b/1a26912d-607f-40aa-851d-c00f035a5b3a.json';

    let languageData = []

    onMount(function() {
        jsonp(wakatimeProfile, null, function(err, data) {
            if (err) {
                console.error(err.message);
            } else {
                languageData = data.data;
            }
        });
    });

</script>

<style lang="postcss"></style>

<div>
{JSON.stringify(languageData)}
</div>