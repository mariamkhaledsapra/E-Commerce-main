import React from "react";
import { Form, Button, label, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Loginpage = () => {
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target;
    console.log({ email, password });
    navigate("/profile", { replace: true });
  }
  return (
    <Form
      style={{ width: "512px", maxWidth: "100%" }}
      className="mx-auto"
      onSubmit={onSubmit}
    >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </Form.Group>

      {/*Re-register from the beginning and new*/}
      <Button variant="primary" type="submit" className="w-100">
        Submit
      </Button>
      <Stack>
        <label className="btn-login mx-auto my-4">
          {" "}
          dont have an account?
          <Link to="/signpage" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              {" "}
              Click to register{" "}
            </span>
          </Link>
        </label>
      </Stack>
    </Form>
  );
};

export default Loginpage;
