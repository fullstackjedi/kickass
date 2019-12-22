<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./components/pages/Home.svelte";
  import Shop from "./components/pages/Shop.svelte";
</script>

<Router>
  <Navbar />

  <Route path="/">
    <Home />
  </Route>
  <Route path="/products">
    <Shop />
  </Route>
</Router>
