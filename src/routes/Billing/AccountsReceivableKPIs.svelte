<script>
  import Card from '$lib/Card.svelte'
  import CardError from '$lib/CardError.svelte'
  import CardLoading from '$lib/CardLoading.svelte'
  import { writable } from 'svelte/store'
  const tds = writable(new Date())
  import AccountsReceivableKPIsRow from './AccountsReceivableKPIsRow.svelte'
  import { data } from '$lib/data.js'
  import { getKPIs } from './AccountsReceivableKPIs.js'
  const size = 12
  const title = 'Accounts Receivable'
  const _getKPIs = async (d) => {
    const json = d
    const ds0 = json.AccountsReceivableV2
    const retval = await getKPIs(d)
    tds.set(ds0.tds) //don't update tds until retval is returned without errors
    return retval
  }
</script>

<Card {size} {title} tds={$tds}>
  <div class="table-responsive m-0 mt-2 m-lg-4">
    {#await _getKPIs($data)}
      <CardLoading />
    {:then { kpis, kpiTotals: { tCnt, tAmt }, dso }}
      <table class="table table-borderless caption-top align-middle">
        <caption class="text-center">AR Aging KPIs</caption>
        <thead>
          <tr class="text-end table-light">
            <th class="text-start">KPI</th>
            <th>Count</th>
            <th>Amount</th>
            <th>Current</th>
            <th>Goal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {#each kpis as kpi}
            <AccountsReceivableKPIsRow {kpi} />
          {/each}
          <tr class="text-end text-bold">
            <td class="text-start border-top">Total:</td>
            <td class="border-top">{tCnt}</td>
            <td class="border-top">{tAmt}</td>
            <td colspan="3" />
          </tr>
        </tbody>
      </table>
      <table
        class="table table-borderless text-center caption-top align-middle">
        <caption class="text-center">DSO KPI</caption>
        <thead>
          <tr class="table-light">
            <th>Current</th>
            <th>Goal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dso} days</td>
            <td>&lt; 22.5 days</td>
          </tr>
        </tbody>
      </table>
    {:catch error}
      <CardError {error} />
    {/await}

  </div>
</Card>
