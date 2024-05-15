<script>
  export let ds
</script>

<div class="m-0 mt-2 m-lg-4">

  <h4>Development Roadmap</h4>
  <hr />

  <h5>Current Update</h5>
  <ul>
    <li>
      Version
      <strong>{ds.HistoryV2[0].version}</strong>
    </li>
    <li>
      Released on
      <strong>{ds.HistoryV2[0].date}</strong>
    </li>
    <li>
      Changes
      <ul>
        {#each ds.HistoryV2[0].changes as change}
          <li>{change}</li>
        {/each}
      </ul>
    </li>
  </ul>

  <h5>Up Next / Active Development</h5>
  {#each ds.NextV2 as next}
    <ul>
      <li>
        <strong>{next.Page}</strong>
        <ul>
          {#each next.Changes as change}
            <li>{change}</li>
          {/each}
        </ul>
      </li>
    </ul>
  {/each}

  <h5>Roadmap items / Backlog</h5>
  <ul>
    {#each ds.RoadmapV2 as { Name }}
      <li>{Name}</li>
    {/each}
  </ul>

  <p>
    <em class="text-danger">
      Note: Items are in order of Priority. For priority changes contact John W. and Matt M.
    </em>
  </p>

</div>
