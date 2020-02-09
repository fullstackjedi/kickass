<script>
  import { onMount } from "svelte";

  let cart;

  function truncateString(str, num) {
    if (str.length <= num) return str;

    return str.slice(0, num) + "...";
  }

  onMount(() => {
    cart = localStorage.getItem("cart");

    if (cart) {
      cart = JSON.parse(cart);
    }
  });
</script>

<style>
  .product-card {
    width: 90%;
    margin: 5px auto;
    display: flex;
    justify-content: space-between;
    background: #fff;
  }

  .product-img {
    width: 40%;
  }

  .product-img img {
    max-width: 100%;
  }

  .product-details {
    width: 55%;
  }
</style>

{#if !cart}
  <p>No Items in your Cart</p>
{:else}
  {#each cart as item}
    <div class="product-card">
      <div class="product-img">
        <img src={item.cloudURLs[0]} alt="" />
      </div>
      <div class="product-details">
        <p>{item.price}</p>
        <p>{truncateString(item.name, 15)}</p>
        <div class="d-flex justify-content-between">
          <p>{item.color}</p>
          <p>{item.size}</p>
          <p>Qty 2</p>
        </div>
      </div>
    </div>
  {/each}
{/if}
