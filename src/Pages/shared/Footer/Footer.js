import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center">
      <h3 className="footer-title ">Md Shahar Shitol</h3>
      <p className="mb-5">
        <small className="pro ">Production</small>
      </p>
      <div className="social-icon mb-4">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <BsFacebook />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <p className="mt-5">
        <small className="copyright-text">
          Copyright © by Md shahar Shital
        </small>
      </p>
    </footer>
  );
};

export default Footer;
