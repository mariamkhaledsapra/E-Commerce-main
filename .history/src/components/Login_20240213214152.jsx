import React from "react";

const Login = () => {
  return (
    <div className="bg-danger d-flex mt-5" style={{ height: "250px" }}>
      {" "}
      <div className="mb-3 col-6 row d-flex justify-content-center">
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
  );
};

export default Login;
