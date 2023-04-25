import Link from "next/link";
import React from "react";

const Layouts = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <button className="nav-button">Home</button>
      </Link>
      <button className="nav-button">Experience</button>
      <button className="nav-button">Portfolio</button>
      <Link href="/contact">
        <button className="nav-button">Contact</button>
      </Link>
    </div>
  );
};

export default Layouts;
