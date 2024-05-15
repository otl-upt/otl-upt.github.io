<script>
    import ToggleButton from '$lib/ToggleButton.svelte';
    import Table from '$lib/Table.svelte';
    import {number_format} from '$lib/frtl-utility';
    import { data } from '$lib/data.js'
    
    export let kpi;
    const cv = kpi.Name.split(" ")[0]
    const json = $data
    const ds0 = json.AccountsReceivableV2
    const dt0 = ds0.AgingDetailV2
    const filtered = dt0
        .filter( x => x[cv + " Cnt"] != 0)
        .map(x => ({
            a: x['CUSTNMBR'],
            b: x['CUSTNAME'],
            c: parseFloat(x[cv + ' Amt']),
            d: x[cv + ' Cnt']
        }))
        .sort((a,b) => b.c - a.c);
    const rows = filtered
        .map(x => ({
            a: x.a,
            b: x.b,
            c: `$${number_format(x.c,2,'.',',')}`,
            d: x.d
        }));
    const headers = `CUSTNMBR,CUSTNAME,${cv} Amount,${cv} Count`.split(',')
    const sum = (x,y)=>x + y
    const fsum = v => number_format(v,0,'.',',');
    const ps = filtered.filter(x=>x.c > 0)
    const ns = filtered.filter(x=>x.c < 0)
    const countp = ps.map(x=>x.d).reduce(sum)
    const countn = ns.map(x=>x.d).length===0?0:ns.map(x=>x.d).reduce(sum)
    const amountp = fsum(ps.map(x=>x.c).reduce(sum))
    const amountn = fsum(ns.map(x=>x.c).length===0?0:ns.map(x=>x.c).reduce(sum))
    let show = false;
    
</script>
<tr class="text-end align-bottom">
    <td class="text-start">{kpi.Name}</td>
    <td>
        <small class="text-muted">
        {countp}<br />
        {countn}<br />
        </small>
        <span class="border-top">{kpi.Count}</span>
    </td>
    <td>
        <small class="text-muted">
        {amountp}<br />
        {amountn}<br />
        </small>
        <span class="border-top">{kpi.CurrentUsd}</span>
    </td>
    <td>{kpi.CurrentPct}</td>
    <td>{kpi.GoalPct}</td>
    <td><ToggleButton bind:show /></td>
</tr>
{#if show}
<tr>
    <td colspan="6">
        <Table {headers} {rows} twist={false} />
    </td>
</tr>
{/if}