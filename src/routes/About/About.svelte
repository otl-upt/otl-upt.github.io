<script>
  import Card from '$lib/Card.svelte'
  import CardError from '$lib/CardError.svelte'
  import CardLoading from '$lib/CardLoading.svelte'
  import { writable } from 'svelte/store'
  const tds = writable(new Date())
  import { data } from '$lib/data.js'
  const size = 12
  const title = ''

  import Roadmap from './Roadmap.svelte'
  import Versioning from './Versioning.svelte'
  import History from './History.svelte'

  const getData = async (d) => {
    const json = d
    const ds0 = json.AboutV2
    tds.set(ds0.tds)
    return ds0
  }
</script>

<Card {size} {title} tds={$tds}>
  {#await getData($data)}
    <CardLoading />
  {:then ds}
    <Roadmap {ds} />
    <Versioning />
    <History {ds} />
  {:catch error}
    <CardError {error} />
  {/await}
</Card>
