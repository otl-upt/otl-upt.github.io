<script>
  import {
    Chart,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    LineController,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
  } from 'chart.js'

  Chart.register(
    LineElement,
    BarElement,
    PointElement,
    BarController,
    LineController,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
  )

  import { onMount } from 'svelte'
  export let config
  let el
  onMount(async () => new Chart(el, config))
</script>

<div class="chart-area m-2">
  <canvas bind:this={el} />
</div>
