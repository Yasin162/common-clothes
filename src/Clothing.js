import React, { useState } from "react";
import { MyConsumer } from "./MyContext";
import { useParams } from "react-router";
const Clothing = props => {
  const params = useParams();
  const [cartId, setCartId] = useState(1);
  return (
    <MyConsumer>
      {context => {
        // debugger;
        const updateCart = context.updateCart;
        // const itemToAdd = context.clothing;
        const handleChange = e => {
          setCartId(e.target.value);
        };
        const handleAddToCart = e => {
          e.preventDefault();
          const clothing = context.clothes.find(c => `${c.id}` === params.id);
          const updatedClothing = { ...clothing, cart_id: cartId };
          updateCart(updatedClothing);
        };
        const eachCart = context.carts.map(cart => {
          return <option value={cart.id}>{cart.name}</option>;
        });

        if (context.clothes.length === 0) {
          return <h5>Please wait...</h5>;
        } else {
          const clothing = context.clothes.find(c => `${c.id}` === params.id);

          return (
            <div>
              <aside>
                <h2>
                  {clothing.name} <br />
                  <img src={clothing.image} alt="" />
                </h2>
                <h2>Name of cart</h2>
                <form onSubmit={handleAddToCart} value={cartId}>
                  <select onChange={handleChange}>{eachCart}</select>
                  <input
                    class="select-input"
                    type="submit"
                    value="add to cart"
                  />
                </form>
              </aside>

              <h4>Price: ${clothing.price}</h4>
              <hr />
              <h3>Features</h3>
              <h4>Fabric: {clothing.fabric}</h4>
              <h4>Color: {clothing.color}</h4>
              <hr />
            </div>
          );
        }
      }}
    </MyConsumer>
  );
};

export default Clothing;
