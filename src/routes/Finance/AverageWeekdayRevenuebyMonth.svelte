<script>
  
  import Card from '$lib/Card.svelte'
  import Chart from '$lib/Chart.svelte'
  import CardError from '$lib/CardError.svelte'
  import CardLoading from '$lib/CardLoading.svelte'
  import { writable } from 'svelte/store'
  const tds = writable(new Date())
  import { data } from '$lib/data.js'
  import { getConfig } from './AverageWeekdayRevenuebyMonth.js'
  const size = 12
  const title = 'Average Weekday Revenue by Month'

  const _getConfig = async (d) => {
    const json = d
    const ds0 = json.FinanceV5
    const retval = await getConfig(d)
    tds.set(ds0.tds) //don't update tds until retval is returned without errors
    return retval
  }

</script>

<Card {size} {title} tds={$tds}>
  {#await _getConfig($data)}
    <CardLoading />
  {:then config}
    <Chart {config} />
  {:catch error}
    <CardError {error} />
  {/await}
</Card>
