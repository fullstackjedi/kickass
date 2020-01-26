<script>

</script>

<style>

</style>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form
        method="POST"
        class="mt-5 text-center border border-light p-5 dropzone"
        action="http://localhost:1000/products/brand"
        enctype="multipart/form-data">

        <p class="h4 mb-4">Add a Brand</p>

        <input
          type="text"
          name="name"
          class="form-control mb-4"
          placeholder="Brand Name" />

        <input type="file" name="image" />
        <!-- TODO: Implement Drag and Drop -->

        <button class="btn btn-info btn-block my-4" type="submit">
          Upload
        </button>
      </form>
    </div>
  </div>
</div>
