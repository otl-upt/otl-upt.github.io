<script>
  export let showBy
  export let showByVal
  import { number_format, sumBy, multiSort } from '$lib/frtl-utility'
  import Table from '$lib/Table.svelte'
  import { data } from '$lib/data.js'
  const json = $data
  const ds0 = json.FinanceV5
  const dt0 = ds0.MissingGallonsV1

  const filteredRows = dt0.filter((a) => a[showBy] === showByVal)
  const f = showBy === 'Terminal' ? 'BillTo' : 'Terminal'
  const sortedRows = multiSort(filteredRows,{[f]: 'asc',LostRev: 'desc'})
  const mappedRows = sortedRows.map(x=>({
      [f]: x[f]
      ,Number: x.Order
      ,Ship: x.Ship
      ,"Ship City": x["Ship City"]
      ,Dest: x.Dest
      ,"Dest City": x["Dest City"]
      ,"Split Drops": x["Split Drops"]
      ,Date: new Date(x.Date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      ,Gas: x.Gas
      ,Dsl: x.Dsl
      ,Total: x.Dsl + x.Gas
      ,Driver: x.Driver
      ,LostRev: `$${x.LostRev.toFixed(2)}`
      ,rowclass: x.Gas > 0 && x.Dsl > 0 ? 'bg-secondary text-white' : ''
    }))
  const rows = mappedRows
</script>

<Table {rows} tableclass={"smaller-text m-0 mt-2 text-nowrap table table-bordered table-sm table-hover small w-90"} />
