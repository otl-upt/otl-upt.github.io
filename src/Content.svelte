<script>
  import Router from "svelte-spa-router";
  import Billing from "./routes/Billing/Billing.svelte";
  const routes = {
    "/": Billing,
  };
</script>

<Router {routes} />
