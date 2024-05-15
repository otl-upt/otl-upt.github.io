<script>
  import ToggleButton from '$lib/ToggleButton.svelte'
  export let onChange
  let showBy = 'Terminal'
  $: onChange(showBy)

  import { downloadcsv } from '$lib/csvdownloader'
  import { data } from '$lib/data.js'
  const json = $data
  const ds0 = json.FinanceV5
  const dt0 = ds0.MissingGallonsV1

  const c1 = () => {
    showBy = 'Terminal'
  }
  const c2 = () => {
    showBy = 'BillTo'
  }
  const c3 = () => {
    downloadcsv(
    //   dt0.map((x) => ({ ...x, Date: `=""${x.Date.slice(0, 16).replace('T', ' ')}""` })),
      dt0.map((x) => ({ ...x, Date: x.Date.slice(0, 16).replace('T', ' ')})),
      null,
      `Missing Gallons`,
    )
  }
</script>

<div class="btn-group m-2" role="group">
  <button type="button" class="btn btn-outline-primary" on:click={c1}>
    By Terminal
  </button>
  <button type="button" class="btn btn-outline-primary" on:click={c2}>
    By BillTo
  </button>
  <button type="button" class="btn btn-outline-primary" on:click={c3}>
    Download CSV
  </button>
</div>
