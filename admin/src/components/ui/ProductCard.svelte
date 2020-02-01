<script>
  import commafy from "commafy";

  export let product;
</script>

<style>
  .card {
    width: 300px;
    margin-right: 10px;
  }

  .card img {
    width: 100%;
  }

  .card-title {
    font-size: 1rem;
    padding-top: 0.5rem;
  }

  .card-text {
    font-size: 1.5rem;
  }
</style>

<div class="card">
  <div class="card-body">
    <img src={product.cloudURLs[0]} alt="" />
    <h4 class="card-title">
      <a>{product.name}</a>
    </h4>
    <p class="card-text">{`₦${commafy(product.price)}`}</p>
  </div>
</div>
