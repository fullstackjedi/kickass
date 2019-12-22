<script>
  export let imgSrc, title, url;
</script>

<style>
  .card {
    height: 400px;
  }
  .shade {
    background-color: rgba(0, 0, 0, 0.4);
    min-height: 100%;
  }
  .card-title {
    font-size: 4rem;
  }
  .white-text {
    color: #fff;
  }
</style>

<!-- Card -->
<div class="card card-image" style={`background-image: url(${imgSrc});`}>

  <!-- Content -->
  <div class="shade text-white text-center d-flex align-items-center py-5 px-4">
    <div style="width: 100%">
      <h5 class="white-text">
        <i class="fas fa-chart-pie" />
        Shop
      </h5>
      <h2 class="card-title pt-2">
        <strong>{title}</strong>
      </h2>
      <a href={url} class={title === 'Men' ? 'btn btn-dark' : 'btn btn-pink'}>
        <i class="fas fa-clone left" />
        View Products
      </a>
    </div>
  </div>

</div>
<!-- Card -->
