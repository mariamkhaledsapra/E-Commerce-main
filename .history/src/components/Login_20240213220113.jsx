import React from "react";

const Login = () => {
  return (
    <div class="login-form w-100 bg-danger p-5">
      <form>
        <div class="d-flex">
          <label for="email" class="col-4">Email address</label>

          <input
            type="email"
            class="col-8"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div class="d-flex">
          <label for="email" class="col-4">Email address</label>

          <input
            type="email"
            class="col-8"
            id="email"
            placeholder="Enter email"
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
