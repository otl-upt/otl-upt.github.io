<script>
  import Card from '$lib/Card.svelte'
  import CardError from '$lib/CardError.svelte'
  import CardLoading from '$lib/CardLoading.svelte'
  import { writable } from 'svelte/store'
  const tds = writable(new Date())
  import BillingKPIsRow from './BillingKPIsRow.svelte'
  import { data } from '$lib/data.js'
  import { getKPIs } from './BillingKPIs.js'
  const size = 12
  const title = 'Billing'
  const _getKPIs = async (d) => {
    const json = d
    const ds0 = json.BillingV1
    const retval = await getKPIs(d)
    tds.set(ds0.tds) //don't update tds until retval is returned without errors
    return retval
  }
</script>

<Card {size} {title} tds={$tds}>
  <div class="table-responsive m-0 mt-2 m-lg-4">
    {#await _getKPIs($data)}
    <CardLoading />
    {:then kpis}
      <table class="table table-borderless table-sm align-middle">
        <thead>
          <tr class="text-end table-light">
            <th class="text-start">KPI</th>
            <th>Current</th>
            <th>Goal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {#each kpis as kpi}
            <BillingKPIsRow {kpi} />
          {/each}
        </tbody>
      </table>
    {:catch error}
    <CardError {error} />
    {/await}
    
  </div>
</Card>
