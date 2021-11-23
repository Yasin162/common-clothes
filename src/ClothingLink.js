import React from "react";
import { Link } from "react-router-dom";

const ClothingLink = ({ clothing }) => {
  return (
    <div>
      <Link key={clothing.id} to={`/clothes/${clothing.id}`}>
        <li>
          {clothing.name} <br /> <img src={clothing.image} alt="" />
        </li>
      </Link>
    </div>
  );
};

export default ClothingLink;
