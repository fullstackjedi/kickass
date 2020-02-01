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
</style>

<!-- <AuthObserver /> -->

<Nav {segment} />

<main>
  <div class="container pt-5">
    <slot />
  </div>
</main>

<Footer />
