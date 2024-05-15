<script>
  import Card from '$lib/Card.svelte'
  import CardError from '$lib/CardError.svelte'
  import CardLoading from '$lib/CardLoading.svelte'
  import { writable } from 'svelte/store'
  const tds = writable(new Date())
  import { data } from '$lib/data.js'
  import { number_format } from '$lib/frtl-utility'
  import Table from '$lib/Table.svelte'
  const size = 12
  const title = 'Safety Related Expenses - YTD'
  const getRows = async (d) => {
    const json = d
    const ds0 = json.FinanceV5
    const dt0 = ds0.SafetyExpensesV1
    tds.set(ds0.tds)
    return dt0.map((x) => ({
      Terminal: x.Terminal,
      'Workers Comp': x.WorkersCompensation,
      Insurance: x.RiskInsurance,
      'Wreck & Repairs': x.WreckRepairs,
      'Losses & Damages': x.LossesAndDamages,
    }))
  }
</script>

<Card {size} {title} tds={$tds}>
  {#await getRows($data)}
    <CardLoading />
  {:then rows}
    <Table {rows} showTotals={true} fmtMoney={true} twist={false} />
  {:catch error}
    <CardError {error} />
  {/await}
</Card>
