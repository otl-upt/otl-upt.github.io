<script>
  import Card from '$lib/Card.svelte'
  import CardError from '$lib/CardError.svelte'
  import CardLoading from '$lib/CardLoading.svelte'
  import { writable } from 'svelte/store'
  const tds = writable(new Date())
  import MissingGallonsRow from './MissingGallonsRow.svelte'
  import MissingGallonsButtons from './MissingGallonsButtons.svelte'
  import { data } from '$lib/data.js'
  import { getKPI } from './MissingGallons.js'
  const size = 12
  const title = 'Minimum Gallon Previous Month'
  let showBy = 'Terminal'
  const _getKPIs = async (d) => {
    const json = d
    const ds0 = json.FinanceV5
    const retval = await getKPI(d)
    tds.set(ds0.tds) //don't update tds until retval is returned without errors
    return retval
  }
</script>

<Card {size} {title} tds={$tds}>
  {#await _getKPIs($data)}
    <CardLoading />
  {:then kpi}
    <MissingGallonsButtons onChange={(x) => (showBy = x)} />
    <div class="container mb-2">
      <div class="row bg-light p-2 fw-bold">
        <div class="col-6">{showBy}</div>
        <div class="col-6 text-end">Lost Revenue</div>
      </div>
      {#if showBy === 'Terminal'}
        {#each kpi.rowsByTerminal as row}
          <MissingGallonsRow {row} {showBy} />
        {/each}
      {:else}
        {#each kpi.rowsByBillTo as row}
          <MissingGallonsRow {row} {showBy} />
        {/each}
      {/if}
      <div class="row bg-dark text-light p-2">
        <div class="col-6">Total</div>
        <div class="col-6 text-end">${kpi.rowsTotal}</div>
      </div>
    </div>
  {:catch error}
    <CardError {error} />
  {/await}
</Card>
