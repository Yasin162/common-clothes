import React, { useState } from "react";
import { MyConsumer } from "./MyContext";
import CartLink from "./CartLink";
const Carts = () => {
  const [name, setName] = useState("");
  const formName = (e) => {
    setName(e.target.value);
  };

  return (
    <MyConsumer>
      {(context) => {
        const addToCarts = context.addCart;
        const allCarts = context.carts.map((carts) => (
          <CartLink key={carts.id} carts={carts} />
        ));
        const addNewCart = (e) => {
          e.preventDefault();

          const formData = { name: name };

          addToCarts(formData);

          setName("");
        };
        return (
          <div>
            <h1>Carts</h1>
            {allCarts}
            <hr />
            <h1>Make new cart</h1>
            <form onSubmit={addNewCart}>
              <label type="text">
                Name:
                <input
                  type="text"
                  name="text"
                  value={name}
                  onChange={formName}
                />
              </label>
              <input type="submit" />
            </form>
          </div>
        );
      }}
    </MyConsumer>
  );
};

export default Carts;
