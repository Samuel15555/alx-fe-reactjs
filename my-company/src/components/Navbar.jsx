// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
  };

  return (
    <nav style={navStyle}>
      <h2>My Website</h2>
      <div>
        <a href="/" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>
          Home
        </a>
        <a href="/about" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>
          About
        </a>
        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
