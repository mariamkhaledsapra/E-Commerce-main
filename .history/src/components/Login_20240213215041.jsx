import React from "react";

const Login = () => {
  return (
    <div className="bg-danger d-flex" style={{ height: "100vh" }}>
      {" "}
      <div className="col-6 d-block login  bg-info">
        {" "}
        <div className="mb-3  d-flex justify-content-center ">
          <label className="fw-bolder col-1">E-Mail</label>
          <div className="col-4">
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="w-100 border rounded"
            />
          </div>
        </div>
        <div className="mb-3  d-flex justify-content-center">
          <label className="fw-bolder col-1">Password</label>
          <div className="col-4">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-100 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
