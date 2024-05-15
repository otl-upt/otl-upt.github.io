<script>
  import Router from "svelte-spa-router";
  import Billing from "./routes/Billing/Billing.svelte";
  // import Finance from "./routes/Finance/Finance.svelte";
  import Operations from "./routes/Operations/Operations.svelte";
  import About from "./routes/About/About.svelte";
  // import Safety from "./routes/Safety/Safety.svelte";
  // import Maint from "./routes/Maint/Maint.svelte";
  const routes = {
    "/": Billing,
    // "/Finance": Finance,
    "/Operations": Operations,
    "/About": About,
    // "/Safety": Safety,
    // "/Maint": Maint,
  };
</script>

<Router {routes} />
