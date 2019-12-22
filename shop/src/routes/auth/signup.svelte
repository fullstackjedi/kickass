<script>
  import axios from "axios";

  let body = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  async function signup() {
    await axios.post("http://localhost:1000/auth/signup", {
      body
    });
  }
</script>

<p class="h4 mb-4">Sign up</p>

<div class="form-row mb-4">
  <div class="col">
    <!-- First name -->
    <input
      type="text"
      id="defaultRegisterFormFirstName"
      class="form-control"
      placeholder="First name" />
  </div>
  <div class="col">
    <!-- Last name -->
    <input
      type="text"
      id="defaultRegisterFormLastName"
      class="form-control"
      placeholder="Last name" />
  </div>
</div>

<!-- Username -->
<input type="text" placeholder="Username" class="form-control mb-4" />

<!-- E-mail -->
<input
  type="email"
  id="defaultRegisterFormEmail"
  class="form-control mb-4"
  placeholder="E-mail" />

<!-- Password -->
<input
  type="password"
  id="defaultRegisterFormPassword"
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
  id="defaultRegisterFormPassword2"
  class="form-control"
  placeholder="Re-enter Password"
  aria-describedby="defaultRegisterFormPasswordHelpBlock" />

<!-- Sign up button -->
<button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

<!-- Social register -->
<p>or sign up with:</p>

<a href="#" class="mx-2" role="button">
  <i class="fab fa-facebook-f light-blue-text" />
</a>
<a href="#" class="mx-2" role="button">
  <i class="fab fa-twitter light-blue-text" />
</a>
<a href="#" class="mx-2" role="button">
  <i class="fab fa-linkedin-in light-blue-text" />
</a>
<a href="#" class="mx-2" role="button">
  <i class="fab fa-github light-blue-text" />
</a>

<hr />

<!-- Terms of service -->
<p>
  By clicking
  <em>Sign up</em>
  you agree to our
  <a href="" target="_blank">terms of service</a>

</p>
