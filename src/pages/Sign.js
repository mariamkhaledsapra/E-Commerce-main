import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
const Signpage = () => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" name="fName" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" name="lName" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Re-enter the email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
                     {/*Registration by email is available*/}
      <Stack>
          <label className='btn-login mx-auto my-4'> Already have account ?
              <Link to="/login" style={{textDecoration:'none'}}>
                <span style={{cursor:"pointer"}} className="text-danger"> Click to Login </span>
              </Link>
          </label>
            </Stack>
    </Form>
  );
}

export default Signpage
