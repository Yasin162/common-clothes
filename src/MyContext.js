import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

export default MyContext;

const MyProvider = props => {
  const [clothes, setClothes] = useState([]);

  //  Fetching clothes data and sets state
  useEffect(() => {
    fetch(`http://localhost:9292/items`)
      .then(resp => resp.json())

      .then(data => setClothes(data));
  }, []);

  const [carts, setCarts] = useState([]);

  //  Fetching carts data and sets state

  const updateCart = item => {
    fetch(`http://localhost:9292/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const c = carts.find(c => c.id === data.cart_id);
        const newC = { ...c, items: [...c.items, data] };
        const newCarts = carts.map(cart =>
          cart.id === data.cart_id ? newC : cart
        );
        // debugger;
        setCarts(newCarts);
      });
  };

  useEffect(() => {
    fetch("http://localhost:9292/carts")
      .then(resp => resp.json())
      .then(data => setCarts(data));
  }, []);

  // add a clothing request
  const addClothing = clothing => {
    fetch("http://localhost:9292/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clothing),
    })
      .then(res => res.json())
      .then(data => {
        setClothes([...clothes, data]);
      });
  };

  // add cart

  const addCart = cart => {
    fetch("http://localhost:9292/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then(res => res.json())
      .then(data => {
        setCarts([...carts, data]);
      });
  };

  return (
    <MyContext.Provider
      value={{
        clothes: clothes,
        carts: carts,
        setCarts: setCarts,
        addClothing: addClothing,
        addCart: addCart,
        updateCart: updateCart,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };
