<script>
  import { onMount } from "svelte";
  import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
  import axios from "axios";
  import jQuery from "jquery";

  onMount(() => {
    ClassicEditor.create(document.querySelector("#editor"), {
      toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "blockQuote"
      ]
    })
      .then(editor => {
        window.editor = editor;
      })
      .catch(error => {
        console.error("There was a problem initializing the editor.", error);
      });
  });

  function addProduct() {
    const bodyFormData = new FormData(document.getElementById("addProduct"));

    axios({
      method: "post",
      url: "http://localhost:1000/products",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(function(response) {
        location.reload();
      })
      .catch(function(response) {
        //handle error
        Snackbar.show({
          pos: "bottom-right",
          text: "Error uploading Product"
        });
      });
  }
</script>

<form
  on:submit|preventDefault={addProduct}
  class="text-center p-2"
  id="addProduct">

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
    name="color"
    class="form-control mb-4"
    placeholder="Product Color" />

  <select name="category" class="mb-4 browser-default custom-select">
    <option selected>Select a Category</option>
    <option value="men">Men</option>
    <option value="women">Women</option>
    <option value="unisex">Unisex</option>
  </select>

  <input
    type="text"
    name="brand"
    class="form-control mb-4"
    placeholder="Product Brand" />

  <div class="file-upload-wrapper mb-4">
    <input
      type="file"
      name="image"
      id="input-file-now"
      class="file-upload"
      multiple />
  </div>

  <div id="editor">
    <h5>Product description goes here.</h5>
  </div>

  <button class="btn btn-info btn-block my-4" type="submit">Upload</button>

</form>
