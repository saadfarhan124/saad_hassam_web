import Link from "next/link";
import React from "react";

const Layouts = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <button className="nav-button">Home</button>
      </Link>
      <Link href="/profile">
        <button className="nav-button">Profile</button>
      </Link>

      <button className="nav-button">Experience</button>
      <Link href="/portfolio">
        <button className="nav-button">Portfolio</button>
      </Link>
      <Link href="/contact">
        <button className="nav-button">Contact</button>
      </Link>
    </div>
  );
};

export default Layouts;
