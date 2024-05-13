import React from "react";

const Login = () => {
  return (
    <div className="  mt-5" style={{ height: "250px" }}>
      {" "}
      <div className="mb-3  col-8">
        <label className="col-sm-2 fw-bolder">E-Mail</label>
        <div className="">
          <input type="email" placeholder="Enter Your E-mail" />
        </div>
      </div>
      <div className="  col-8">
        <label className="col-sm-2  fw-bolder">Password</label>
        <div>
          <input type="password" placeholder="Enter Your Password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
