import React from "react";

const Login = () => {
  return (
    <div className="bg-danger  mt-5" style={{ height: "250px" }}>
      {" "}
      <div className="mb-3  d-flex justify-content-center">
        <label className="fw-bolder">E-Mail</label>
        <div className="col-4">
          <input type="email" placeholder="Enter Your E-mail" className={"w-100"}/>
        </div>
      </div>
      <div className="mb-3  d-flex justify-content-center">
        <label className="fw-bolder">E-Mail</label>
        <div className="col-4">
          <input type="email" placeholder="Enter Your E-mail" className={"w-100"}/>
        </div>
      </div>
    
    </div>
  );
};

export default Login;
