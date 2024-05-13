import React from "react";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center flex-wrap mt-5">
      {" "}
      <div className="mb-3 row col-8">
        <label for="staticEmail" className="col-sm-2 col-form-label fw-bolder">
          Email
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" placeholder="" />
        </div>
      </div>
      <div className="mb-3 row col-8">
        <label
          for="inputPassword"
          className="col-sm-2 col-form-label fw-bolder"
        >
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
    </div>
  );
};

export default Login;
