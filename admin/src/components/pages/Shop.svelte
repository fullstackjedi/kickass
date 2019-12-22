<script>
  import axios from "axios";

  let products = [];

  (async () => {
    const res = await axios.get("http://localhost:1000/products");

    if (res.data.status === "success") products = res.data.data.products;
  })();
</script>

<style>

</style>

<div class="container">
  <div class="row">
    {#each products as product}
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              <a>{product.name}</a>
            </h4>
            <p class="card-text">{product.price}</p>
            <p class="card-text">{product.description}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<!-- Default form login -->
<form
  method="POST"
  class="mt-5 text-center border border-light p-5"
  action="http://localhost:1000/products"
  enctype="multipart/form-data">

  <p class="h4 mb-4">Upload Product</p>

  <input
    type="text"
    name="name"
    class="form-control mb-4"
    placeholder="Product Name" />

  <input
    type="number"
    name="price"
    class="form-control mb-4"
    placeholder="Product Price" />

  <input
    type="number"
    name="discount"
    class="form-control mb-4"
    placeholder="Sales Price" />

  <input
    type="number"
    name="size"
    class="form-control mb-4"
    placeholder="Product Size" />

  <input
    type="text"
    name="brand"
    class="form-control mb-4"
    placeholder="Product Brand" />

  <div class="file-upload-wrapper">
    <input type="file" name="image" id="input-file-now" class="file-upload" />
  </div>

  <div class="file-upload-wrapper">
    <input type="file" name="image" id="input-file-now1" class="file-upload" />
  </div>

  <div class="file-upload-wrapper">
    <input type="file" name="image" id="input-file-now2" class="file-upload" />
  </div>

  <textarea name="description" id="" cols="30" rows="10" />

  <input type="color" name="color" />

  <!-- Sign in button -->
  <button class="btn btn-info btn-block my-4" type="submit">Upload</button>

</form>
<!-- Default form login -->
