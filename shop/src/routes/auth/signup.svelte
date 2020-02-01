<script>
  import axios from "axios";

  let userDetails = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const signup = async () => {
    const response = await axios.post(
      "http://localhost:1000/auth/user/signup",
      userDetails
    );

    const { status, data } = response.data;

    if (status === "success") {
      const user = {
        ...data.user,
        token: data.token
      };

      window.localStorage.setItem("user", JSON.stringify(data.user));

      window.location.replace("/");
    }
  };
</script>

<div class="container">
  <div class="row justify-content-center text-center">
    <div class="col-md-7">
      <p class="h4 mb-4">Sign up</p>

      <div class="form-row mb-4">
        <div class="col">
          <!-- First name -->
          <input
            type="text"
            bind:value={userDetails.firstname}
            class="form-control"
            placeholder="First name" />
        </div>
        <div class="col">
          <!-- Last name -->
          <input
            type="text"
            bind:value={userDetails.lastname}
            class="form-control"
            placeholder="Last name" />
        </div>
      </div>

      <!-- Username -->
      <input
        type="text"
        bind:value={userDetails.username}
        placeholder="Username"
        class="form-control mb-4" />

      <!-- E-mail -->
      <input
        type="email"
        bind:value={userDetails.email}
        class="form-control mb-4"
        placeholder="E-mail" />

      <!-- Password -->
      <input
        type="password"
        bind:value={userDetails.password}
        class="form-control"
        placeholder="Password"
        aria-describedby="defaultRegisterFormPasswordHelpBlock" />
      <small
        id="defaultRegisterFormPasswordHelpBlock"
        class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
      </small>

      <!-- Re-enter Password -->
      <input
        type="password"
        bind:value={userDetails.confirmPassword}
        class="form-control"
        placeholder="Re-enter Password"
        aria-describedby="defaultRegisterFormPasswordHelpBlock" />

      <!-- Sign up button -->
      <button
        on:click={signup}
        class="btn text-white my-4 btn-block mdb-color"
        type="button">
        Sign Up
      </button>

      <!-- Social register -->
      <p>
        Got an account?
        <a href="/auth/login">Login</a>
        or sign up with:
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

      <hr />

      <!-- Terms of service -->
      <p>
        By clicking
        <em>Sign up</em>
        you agree to our
        <a href="/" target="_blank">terms of service</a>

      </p>
    </div>
  </div>
</div>
