<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`http://localhost:1000/products`);
    const result = await res.json();
    const { status, data } = result;
    if (status === "success") {
      const { products } = data;
      return { products };
    }
  }
</script>

<script>
  import ListGroup from "../../components/ui/ListGroup.svelte";
  import ListGroupItem from "../../components/ui/ListGroupItem.svelte";
  import ProductCard from "../../components/ui/ProductCard.svelte";
  export let products;
</script>

<style>
  .product-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>

<div class="row">
  <div class="col-md-3">
    <div>
      <h4>Categories</h4>
      <ListGroup>
        <ListGroupItem item="Men" />
        <ListGroupItem item="Women" />
      </ListGroup>
    </div>
    <div class="mt-5">
      <h4>Brands</h4>
      <ListGroup>
        <ListGroupItem item="Nike" />
        <ListGroupItem item="Puma" />
        <ListGroupItem item="Adidas" />
        <ListGroupItem item="Jordan" />
        <ListGroupItem item="Lacoste" />
      </ListGroup>
    </div>
  </div>
  <div class="col-md-9">
    <div class="product-grid">
      {#each products as product (product._id)}
        <ProductCard
          url={product.cloudURLs[0]}
          name={product.name}
          price={(product.price / 360).toFixed(2)} />
      {/each}
    </div>
  </div>
</div>
