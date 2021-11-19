import React from "react";
import { Link } from "react-router-dom";

const CartLink = ({ carts }) => {
  return (
    <Link key={carts.id} to={`/carts/${carts.id}`}>
      <h2> {carts.name} </h2>
    </Link>
  );
};

export default CartLink;
