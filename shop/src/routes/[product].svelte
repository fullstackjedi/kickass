<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(
      `http://localhost:1000/products/${page.params.product}`
    );
    const result = await res.json();
    const { status, data } = result;
    if (status === "success") {
      const { product } = data;
      return { product };
    }
  }
</script>

<script>
  import commafy from "commafy";
  import axios from "axios";
  export let product;

  function addToCart(product) {
    // Get Cart from Local Storage
    let cart = localStorage.getItem("cart");
    // If no Cart create it and push product
    if (!cart) {
      cart = [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
    // If Cart push item
    cart = JSON.parse(cart);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    return;
  }
</script>

<div class="row justify-content-center">
  <div class="col-md-4">
    <!-- Product Images -->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel">
      <div class="carousel-inner">
        {#each product.cloudURLs as image, i}
          <div class={`carousel-item ${i === 0 ? 'active' : ''}`}>
            <img class="d-block w-100" src={image} alt="Product Image" />
          </div>
        {/each}
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <!-- Product Options -->
    <h4>{product.name}</h4>
    <p>{`₦${commafy(product.price)}`}</p>
    <p>{product.color}</p>

    <button class="mx-0 btn btn-dark" on:click={() => addToCart(product)}>
      Add To Cart
    </button>
  </div>
</div>
