import React, { useState } from "react";
import { MyConsumer } from "./MyContext";
import { useParams } from "react-router";

const Cart = () => {
  const params = useParams();
  // const [total, setTotal] = useState(0);
  return (
    <MyConsumer>
      {context => {
        if (context.carts.length === 0) {
          return <h5>Please wait...</h5>;
        } else if (context.clothes.length === 0) {
          return <h5>...No items in cart...</h5>;
        } else {
          const cart = context.carts.find(c => `${c.id}` === params.id);
          const cartItems = cart.items.map(i => (
            <li>
              <strong>{i.name}</strong> price: {i.price}
            </li>
          ));

          return (
            <div>
              <h1>{cart.name}'s cart </h1>
              <h2>Items in cart</h2>
              <hr />
              {cartItems}
              {/* <h2>Total</h2>
              {total} */}
            </div>
          );
        }
      }}
    </MyConsumer>
  );
};

export default Cart;
