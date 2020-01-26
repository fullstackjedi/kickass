<script>
  import axios from "axios";

  import Modal from "../components/ui/Modal.svelte";
  import AddProduct from "../components/AddProduct.svelte";
  import ProductCard from "../components/ui/ProductCard.svelte";

  let products = [];

  (async () => {
    const res = await axios.get("http://localhost:1000/products");

    if (res.data.status === "success") products = res.data.data.products;
  })();
</script>

<style>
  .wrapper {
    display: flex;
    width: 100%;
  }
</style>

<div class="container">
  <div class="row mt-3">
    <div class="col-md-12">
      <button
        class="btn btn-dark"
        type="button"
        data-toggle="modal"
        data-target="#addProductModal">
        Add Product
      </button>

      <div class="wrapper">
        {#each products as product}
          <ProductCard {product} />
        {/each}
      </div>
    </div>
  </div>
</div>

<!-- Central Modal Small -->
<div
  class="modal fade"
  id="addProductModal"
  tabindex="-1"
  role="dialog"
  aria-labelledby="myModalLabel"
  aria-hidden="true">

  <div class="modal-dialog modal-lg" role="document">
    <Modal>
      <AddProduct />
    </Modal>
  </div>
</div>
