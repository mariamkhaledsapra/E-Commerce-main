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
            class="col-10"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div class="d-flex col-10">
          <label for="email" class="col-4">
            Password
          </label>

          <input
            type="email"
            class="col-10 p-2 m-2"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div class="col-12 d-flex mt-3 justify-content-center">
          {" "}
          <button type="submit" class="btn btn-primary col-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
