import React from "react";

const Login = () => {
  return (
    <div class="login-form w-100 bg-danger p-5">
      <form>
        <div class="d-flex">
          <label for="email" class="col-1">Email address</label>

          <input
            type="email"
            class=" w-100"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>

          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
