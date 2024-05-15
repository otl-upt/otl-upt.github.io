<script>
  export let ds
  let history = ds.HistoryV2
  let alpha = JSON.parse(ds.AlphaV1[0])
  let beta = JSON.parse(ds.BetaV1[0])
</script>

<style>
  /* simplecss - https://github.com/kevquirk/simple.css */
  details {
    background: var(--accent-bg);
    border: 1px solid var(--border);
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  summary {
    cursor: pointer;
    font-weight: bold;
    padding: 0.6rem 1rem;
  }

  details[open] {
    padding: 0.6rem 1rem 0.75rem 1rem;
  }

  details[open] summary {
    margin-bottom: 0.5rem;
    padding: 0;
  }

  details[open] > *:last-child {
    margin-bottom: 0;
  }
</style>

<div class="m-0 mt-2 m-lg-4">

  <h4>Versions History</h4>
  <hr />

  <details>
    <summary>Current</summary>
    <p class="p-0 pt-2 p-lg-4">
      {#each history as h}
        <h6>{h.date} - {h.version}</h6>
        <ul>
          {#each h.changes as change}
            <li>{change}</li>
          {/each}
        </ul>
      {/each}
    </p>
  </details>

  <details>
    <summary>Beta</summary>
    <p class="p-0 pt-2 p-lg-4">
      {@html beta}
    </p>
  </details>

  <details>
    <summary>Alpha</summary>
    <p class="p-0 pt-2 p-lg-4">
      {@html alpha}
    </p>
  </details>

  <p>
    <em class="text-danger">
      Note: Version History Detail items are in reverse chronological order. The
      most recent are at the top.
    </em>
  </p>

</div>
