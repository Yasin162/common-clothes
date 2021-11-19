import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="clothes">Clothes</Link>
        <Link to="carts">Carts</Link>
        <Link to="request">Request item</Link>
      </nav>
    </div>
  );
};

export default NavBar;
