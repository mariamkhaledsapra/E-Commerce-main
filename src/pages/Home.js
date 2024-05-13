import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
import Pagination from "react-bootstrap/Pagination";
import { feax } from "./";

export const Home = () => {
  const [posts, setposts] = useState([]);
  const [id, setid] = useState();
  useEffect(() => {
    feax();
    axios
      .get("https://graduation-project-tez6uftvsa-ew.a.run.app/users")
      .then((response) => {
        setposts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /*
//sall timer
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = "December, 31, 2022";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
 
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
*/
  return (
    <>
      <h1>There are offers and discounts of up to 75%</h1>
      <h2>for a limited time</h2>
      <Row className="mb-4">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-20"
          />
        </Col>
        <Col>
          <Button variant="outline-info">Submit</Button>
        </Col>
      </Row>
      <p>
        We are an integrated station that provides all the needs of businessmen
        in exchanging commercial goods between institutions
      </p>
      <Row className="mb-4">
        <Col>
          <div className="timer">
            <h3>Flash Sales</h3>
          </div>
        </Col>
      </Row>
      <h4>Category</h4>
      <Row className="mb-4">
        <Col>
          <h4>top search Related items in all section </h4>
        </Col>
        <Col xs="auto">
          <Button variant="outline-info">View All</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
      <br /> <br />
      <Row className="mb-4">
        <Col>
          <h4>top search Related items similar suggestions</h4>
        </Col>
        <Col xs="auto">
          <Button variant="outline-info">View All</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
      <br />
      <br />
      <Row className="mb-4">
        <Col>
          <h4>top search Related items similar suggestions</h4>
        </Col>
        <Col xs="auto">
          <Button variant="outline-info">View All</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
      <br /> <br />
      <Row className="mb-4">
        <Col>
          <h4>top search Related items similar suggestions</h4>
        </Col>
        <Col xs="auto">
          <Button variant="outline-info">View All</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
      <br />
      <br />
      <Row className="mb-4">
        <Col>
          <h4>top search Related items similar suggestions</h4>
        </Col>
        <Col xs="auto">
          <Button variant="outline-info">View All</Button>
        </Col>
      </Row>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(
          (
            item //loop for card
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col> //js object spread operatorso
          )
        )}
      </Row>
      <br />
      <br />
      <Row className="mb-10">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Row>
    </>
  );
};
