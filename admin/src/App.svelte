<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./components/layout/Navbar.svelte";
  import Home from "./pages/Home.svelte";
  import Shop from "./pages/Shop.svelte";
  import Brands from "./pages/Brands.svelte";
</script>

<Router>
  <Navbar />

  <Route path="/">
    <Home />
  </Route>
  <Route path="/products">
    <Shop />
  </Route>
  <Route path="/brands">
    <Brands />
  </Route>
</Router>
