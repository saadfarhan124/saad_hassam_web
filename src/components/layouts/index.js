import Link from "next/link";
import React from "react";

const Layouts = (props) => {
  return (
    <div>
      <div className="navbar">
        <Link href="/">
          <button className="nav-button">Home</button>
        </Link>
        <Link href={"/experience"}>
          <button className="nav-button">Experience</button>
        </Link>
        <Link href="/portfolio">
          <button className="nav-button">Portfolio</button>
        </Link>
        <Link href="/contact">
          <button className="nav-button">Contact</button>
        </Link>
      </div>
      {props.children}
    </div>
  );
};

export default Layouts;
