import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };
  return (
    <div className="login">
      <div className="form ">
        <form className="p-5 d-flex flex-wrap " onSubmit={handleSubmit}>
          <div className="d-flex col-10 align-items-center">
            <label for="email" className="col-4 text-light fw-bolder">
              Email address
            </label>

            <input
              type="email"
              className="col-10 p-2"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="col-12 d-flex mt-3 justify-content-center">
            {" "}
            <button type="submit" className="btn btn-primary col-4 ">
              Submit
            </button>
          </div>
                               {/*In case he forgets the password*/}
          <Link to="/ForgotPassword" style={{ textDecoration: 'none' }}>
          <Button variant="primary" type="send" className="w-50">ForgotPassword</Button>
        </Link>
            
        <Stack>
          <label className='btn-login mx-auto my-4'> dont have an account? 
              <Link to="/Signup" style={{textDecoration:'none'}}>
                <span style={{cursor:"pointer"}} className="text-danger"> Click to register </span>
              </Link>
          </label>
            </Stack>

        </form>
      </div>
    </div>
  );
};

export default Login;
