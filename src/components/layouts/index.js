import Link from "next/link";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Layouts = (props) => {
  return (
    <div>
      <div className="navbar">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="nav-button"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          className="nav-button"
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={500}
          className="nav-button"
        >
          Portfolio
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="nav-button"
        >
          Contact
        </ScrollLink>
      </div>
      {props.children}
    </div>
  );
};

export default Layouts;
