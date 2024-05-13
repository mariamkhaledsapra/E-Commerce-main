import React from "react";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center flex-wrap mt-5" style={{height:"250px"}}>
      {" "}
      
     
      <div className="mb-3  col-8">
        <label
         
          className="col-sm-2 fw-bolder"
        >
          E-Mail
        </label>
        <div className="">
          <input type="email" className="form-control" placeholder="Enter Your E-mail"/>
        </div>
      </div>
      <div className="mb-3  col-8">
        <label
         
          className="col-sm-2 col-form-label fw-bolder"
        >
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" placeholder="Enter Your Password"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
