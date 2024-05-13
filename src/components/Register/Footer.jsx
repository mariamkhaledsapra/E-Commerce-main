import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import QrCode from "../image/QRCOOD.png";
import google from "../image/googleplay.png";
const Footer = () => {
  return (
    <div className="bg-light py-2 ">
      <div className="d-flex justify-content-between my-3">
        <div className="col-3 text-center">
          <h3 className="fw-bolder" style={{ color: "#C84B31" }}>PROJECT TIST</h3>
          <span>Best information about the company</span>
          <div className="mt-3">
            <FaFacebook className="fs-3"/>
            <FaLinkedin className="fs-3"/>
            <FaTwitter className="fs-3"/>
            <FaYoutube className="fs-3"/>
            <FaInstagramSquare className="fs-3"/>
          </div>
        </div>
        <div className="d-flex col-5">
          {" "}
          <div className="col-4">
            <span className="d-block fw-bold" style={{ color: "#C84B31" }}>Partnership</span>
            <span className="d-block">About Us</span>
            <span className="d-block">Find Store</span>
            <span className="d-block">Categories</span>
            <span className="d-block">Blogs</span>
          </div>
          <div className="col-4">
            <span className="d-block fw-bold" style={{ color: "#C84B31" }}>Information</span>
            <span className="d-block">Help Center</span>
            <span className="d-block">Money Refund</span>
            <span className="d-block">Shipping</span>
            <span className="d-block">Contact Us</span>
          </div>
          <div className="col-4">
            <span className="d-block fw-bold" style={{ color: "#C84B31" }}>For Users</span>
            <span className="d-block">Login</span>
            <span className="d-block">Register</span>
            <span className="d-block">Settings</span>
            <span className="d-block">My Orders</span>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center  ">
          <img src={google} alt="images" />
          <img src={QrCode} alt="images" className="mx-1" />
        </div>

                     {/*penalty of icon*/}
        <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
                <h4 className="mb-0 font-weight-light"> Let's always communicate</h4>
              </Col>
              <col className="text-center " lg="5">
              <Row md="12">
                  <Button className="btn-icon-only rounded-circle" color="twitter" href="#">
                    <span className="btn-inner--icon"> <i class="fa-brands fa-twitter"></i> </span>
                  </Button>
                <Tooltip delay={0} target="tooltip475038074"> facebook  </Tooltip>
                <Button className="btn-icon-only rounded-circle ml-1" color="facebook"href="#">
                  <span className="btn-inner--icon"><i class="fa-brands fa-facebook"></i></span>
                </Button>
                <Tooltip delay={0} target="tooltip829810202"> google </Tooltip>
                <Button className="btn-icon-only rounded-circle ml-1"color="google" href="#" >
                  <span className="btn-inner--icon"><i class="fa-brands fa-google"></i></span>
                  </Button>
              </Row>     
            </col>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright"> © {new Date().getFullYear()}{" "}
                  <h4 >E-Commerce B2B </h4>
                </div>
              </Col>
              
            </Row>
      </div>
    </div>
  );
};

export default Footer;
