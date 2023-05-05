import { Link } from "react-scroll";
import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <Link to="contact" smooth={true} duration={500}>
        <div className="footer-img" />
      </Link>
    </footer>
  );
};

export default Footer;
