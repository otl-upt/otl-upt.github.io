<script>
    export let rows
    export let title = 'Driver Stats'
    export let driver_field = 'Driver'
    export let pct_field
    export let count_field
    export let sort_asc = true; //sort asc by default
    let sort_field = pct_field; //sort by pct currently, can make this param if needed later
    let sortFunction = sort_asc ? (a,b)=>a[sort_field]-b[sort_field] : (a,b)=>b[sort_field]-a[sort_field]
    let sortedRows = rows.sort(sortFunction)
</script>
<h6>{title}</h6>
<div class="row g-2 mb-3">
    {#each sortedRows as row}
    <div class="col-md-2">
        <div class="card text-dark">
            <div class="card-body p-2">
                <div class="d-flex w-90 justify-content-between">
                    <span class="text-muted"><small>{row[driver_field]}:</small></span>
                    <span>{row[pct_field]}%</span>
                </div>
                <div class="d-flex w-90 justify-content-center">
                    <span class="text-muted"><small>{row[count_field]} of {row.TotalCount} orders</small></span>
                </div>
            </div>
        </div>
    </div>
    {/each}     
</div>