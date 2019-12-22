<script>
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

<Nav {segment} />

<main>
  <div class="container pt-5">
    <slot />
  </div>
</main>

<Footer />
