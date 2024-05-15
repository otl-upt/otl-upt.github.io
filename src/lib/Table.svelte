<script>
  import { number_format } from "./frtl-utility.js";

  export let twist = true;
  export let caption = "";

  // helper to remove rowclass
  const a = (r) => {
    if (r) {
      const { rowclass, ...rest } = r;
      return rest;
    } else {
      return [];
    }
  };

  //each row can be decorated with a rowclass value that will add this class to the tr element
  // this is to enable highlighting through css rules.
  export let rows;
  //use headers if passed in, otherwise use the key names, but omit rowclass as that's only for highlighting.
  export let headers;
  headers = headers ? headers : Object.keys(a(rows[0]));
  //table class can be added dynamically as well, if it's not set will use defaults below.
  export let tableclass =
    "table table-hover table-borderless table-sm align-middle";

  //total flag and helper function
  export let showTotals = false;
  const totals = () =>
    headers.map((k, i) =>
      i === 0
        ? "Total"
        : new Intl.NumberFormat("en-US", { style: "decimal" }).format(
            rows
              .map((x) => x[k]?.cellvalue || x[k])
              .map((x) => `${x}`.split("(")[0]) //handle loadhistory
              .map((x) => (isNaN(x) ? 0 : Number(x)))
              .reduce((a, b) => a + b)
          )
    );
  //showVariance for totals flag and helper function
  export let showVariance = false;
  const getVariance = (v, i) =>
    `${v}${
      i === 0
        ? ""
        : " (" +
          new Intl.NumberFormat("en-US", {
            style: "decimal",
            signDisplay: "exceptZero",
          }).format(
            rows
              .map((x) => Object.values(x))
              .map((x) => x[i].cellvalue)
              .map((x) => `${x}`.split("(")[1]) //handle loadhistory
              .map((x) => `${x}`.replace(")", "")) //handle loadhistory
              .map((x) => (isNaN(x) ? 0 : Number(x)))
              .reduce((a, b) => a + b)
          ) +
          ")"
    }`;

  //money format flag and helper function
  export let fmtMoney = false;
  const fmt_val = (value) => {
    if (isNaN(value)) {
      return value;
    } else {
      let retval = "$";
      let absvalue = Math.abs(value);
      if (absvalue >= 1000000) {
        retval += (absvalue / 1000 / 1000).toFixed(2) + "M";
      } else if (absvalue >= 1000) {
        retval += +(absvalue / 1000).toFixed(2) + "K";
      } else {
        retval += +number_format(absvalue);
      }
      if (value < 0) {
        retval = `(${retval})`;
      }
      if (value === 0) {
        retval = `-`;
      }
      return retval;
    }
  };

  //helper function for the total value that will be displayed
  const showTotal = (v, i) =>
    fmtMoney ? fmt_val(v) : showVariance ? getVariance(v, i) : v;
</script>

<div class="table-alert alert alert-info" class:twist>
  If you are viewing this on a tablet you can rotate your device to view a table
  instead.
</div>
<div class="table-responsive m-0 mt-2 m-lg-4" class:twist>
  <table class={tableclass} class:caption-top={true}>
    {#if caption != ""}
      <caption class="text-center">{caption}</caption>
    {/if}
    <thead>
      <tr class="table-light text-end">
        {#each headers as h, i}
          <th class:text-start={i === 0}>{h}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as r}
        <tr class="text-end {r.rowclass}">
          {#each Object.values(a(r)) as v, i}
            <td
              class:text-start={i === 0}
              class={`${v?.cellclass ? v.cellclass + " no-override" : ""}`}
              myval={headers[i]}
            >
              {fmtMoney ? fmt_val(v?.cellvalue || v) : v?.cellvalue || v}
            </td>
          {/each}
        </tr>
      {/each}
      {#if showTotals}
        <tr class="text-end table-dark">
          {#each totals() as v, i}
            <td class:text-start={i === 0} myval={headers[i]}
              >{showTotal(v, i)}</td
            >
          {/each}
        </tr>
      {/if}
    </tbody>
  </table>
</div>

<style>
  /* after a recent update it seems that bootstrap is now always applying 
      a specific td background color rule which is overwriting the row
      rule used by rowclass for highlighting. this rule allows us to
      overwrite the bootstrap rule with the inherited rule from the row
      because this rule should run last and take precedence. */
  /* Override Bootstrap's td style, except for .no-override */
  .table > :not(caption) > * > *:not(.no-override) {
    background-color: inherit !important;
  }
</style>
