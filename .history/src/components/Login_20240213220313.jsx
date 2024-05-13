import React from "react";

const Login = () => {
  return (
    <div class="login-form w-100 bg-danger ">
      <form class="p-5 d-flex flex-wrap">
        <div class="d-flex col-10">
          <label for="email" class="col-4">
            Email address
          </label>

          <input
            type="email"
            class="col-8"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div class="d-flex">
          <label for="email" class="col-4">
            Password
          </label>

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
