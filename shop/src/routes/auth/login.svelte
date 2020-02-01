<script>
  import axios from "axios";

  let userDetails = {
    username: "",
    password: ""
  };

  async function login() {
    const response = await axios.post(
      "http://localhost:1000/auth/user/login",
      userDetails
    );

    const { status, data } = response.data;

    console.log(response);

    if (status === "success") {
      const user = {
        ...data.user,
        token: data.token
      };

      window.localStorage.setItem("user", JSON.stringify(data.user));

      window.location.replace("/");
    }
  }
</script>

<div class="container">
  <div class="row justify-content-center text-center">
    <div class="col-md-7">
      <p class="h4 mb-4">Sign in</p>

      <!-- Username -->
      <input
        type="text"
        bind:value={userDetails.username}
        placeholder="Username or Email"
        class="form-control mb-4" />

      <!-- Password -->
      <input
        type="password"
        bind:value={userDetails.password}
        class="form-control"
        placeholder="Password" />

      <!-- Login button -->
      <button
        on:click={login}
        class="btn btn-info my-4 btn-block"
        type="button">
        Sign in
      </button>

      <!-- Social register -->
      <p>
        New member?
        <a href="/auth/signup">Signup</a>
        or login in with:
      </p>

      <a href="/" class="mx-2" role="button">
        <i class="fab fa-facebook-f light-blue-text" />
      </a>
      <a href="/" class="mx-2" role="button">
        <i class="fab fa-twitter light-blue-text" />
      </a>
      <a href="/" class="mx-2" role="button">
        <i class="fab fa-linkedin-in light-blue-text" />
      </a>
      <a href="/" class="mx-2" role="button">
        <i class="fab fa-github light-blue-text" />
      </a>

    </div>
  </div>
</div>
