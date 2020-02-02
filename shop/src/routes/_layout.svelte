<script>
  import AuthObserver from "../components/AuthObserver.svelte";

  import Nav from "../components/layout/Nav.svelte";
  import Footer from "../components/layout/Footer.svelte";

  export let segment;
</script>

<style>
  main {
    padding: 3rem;
    min-height: 90vh;
  }

  .container-fluid {
    max-width: 80vw;
  }
</style>

<!-- <AuthObserver /> -->

<Nav {segment} />

<main>
  <div class="container-fluid pt-5">
    <slot />
  </div>
</main>

<Footer />
