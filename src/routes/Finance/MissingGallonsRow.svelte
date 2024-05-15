<script>
  export let row
  export let showBy

  import { number_format } from '$lib/frtl-utility'
  import MissingGallonsRowDetail from './MissingGallonsRowDetail.svelte'

  const showByVal = row[0]
  const sumVal = `$${number_format(row[1], 2)}`
  let show = false

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="row p-2 x"
  on:click={() => show = !show}>
  <div class="col-6">{showByVal}</div>
  <div class="col-6 text-end">{sumVal}</div>
</div>
{#if show}
  <MissingGallonsRowDetail {showBy} {showByVal} />
{/if}

<style>
  .x:hover {
    background-color: #0d6efd;
    color: white;
  }
</style>