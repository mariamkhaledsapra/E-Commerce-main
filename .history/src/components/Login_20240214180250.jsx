import React from "react";

const Login = () => {
  const [password , setPassword] = use
  return (
    <div className="login">
      <div className="form ">
        <form className="p-5 d-flex flex-wrap ">
          <div className="d-flex col-10 align-items-center">
            <label for="email" className="col-4 text-light fw-bolder">
              Email address
            </label>

            <input
              type="email"
              className="col-10 p-2"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="d-flex col-10 my-3 align-items-center">
          <label for="email" className="col-4 text-light fw-bolder">
              Password
            </label>

            <input
              type="email"
              className="col-10 p-2"
              id="email"
              placeholder="Enter email"
            />
          </div>

          <div className="col-12 d-flex mt-3 justify-content-center">
            {" "}
            <button type="submit" className="btn btn-primary col-4 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
