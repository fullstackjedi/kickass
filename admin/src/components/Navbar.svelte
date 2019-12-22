<script>
  import { link } from "svelte-routing";
</script>

<div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-dark primary-color">

    <!-- Navbar brand -->
    <a class="navbar-brand" href="/">Navbar</a>

    <!-- Collapse button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#basicExampleNav"
      aria-controls="basicExampleNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>

    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="basicExampleNav">

      <!-- as -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a use:link class="nav-link" href="/">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a use:link class="nav-link" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a use:link class="nav-link" href="/about">About</a>
        </li>

      </ul>
      <!-- as -->

      <form class="form-inline">
        <div class="md-form my-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search" />
        </div>
      </form>
    </div>
    <!-- Collapsible content -->

  </nav>
</div>
