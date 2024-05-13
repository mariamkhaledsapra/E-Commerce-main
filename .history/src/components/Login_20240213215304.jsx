import React from "react";

const Login = () => {
  return (
    <div class="container login bg-danger">

    <div class="row bg-info">
  
      <div class="col-md-4 offset-md-4">
  
        <div class="login-form">
  
          <form>
  
            <div class="form-group">
  
              <label for="email">Email address</label>
  
              <input type="email" class="form-control" id="email" placeholder="Enter email" />
  
            </div>
  
            <div class="form-group">
  
              <label for="password">Password</label>
  
              <input type="password" class="form-control" id="password" placeholder="Password" />
  
            </div>
  
            <button type="submit" class="btn btn-primary">Submit</button>
  
          </form>
  
        </div>
  
      </div>
  
    </div>
  
  </div>
  );
};

export default Login;
