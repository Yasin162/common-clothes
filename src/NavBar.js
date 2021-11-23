import React from "react";
import { Link } from "react-router-dom";
const linkStyles = {
  textAlign: "center",
  borderRadius: 30,
  display: "inline-block",
  width: "70px",
  padding: "20px",
  margin: "0 12px 6px",
  background: "orange",
  textDecoration: "none",
  color: "Beige",
};
const NavBar = () => {
  return (
    <div>
      <nav>
        <Link
          to="clothes"
          style={linkStyles}
          activeStyle={{ fontWeight: "bold", background: "black" }}
        >
          Clothes
        </Link>
        <Link
          to="carts"
          style={linkStyles}
          activeStyle={{ background: "black" }}
        >
          Carts
        </Link>
        <Link
          to="request"
          style={linkStyles}
          activeStyle={{ background: "black" }}
        >
          Request item
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
