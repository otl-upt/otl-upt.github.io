<script>
  export let text = 'Details'
  export let show = false
</script>

<button
  class="btn btn-sm btn-primary"
  on:click={() => {
    show = !show
  }}>
  {text}
</button>
