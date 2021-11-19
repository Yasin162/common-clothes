import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

export default MyContext;

const MyProvider = (props) => {
  const [clothes, setClothes] = useState([]);

  //  Fetching clothes data and sets state
  useEffect(() => {
    fetch(`http://localhost:9292/items`)
      .then((resp) => resp.json())

      .then((data) => setClothes(data));
  }, []);

  const [carts, setCarts] = useState([]);

  //  Fetching carts data and sets state
  useEffect(() => {
    fetch("http://localhost:9292/carts")
      .then((resp) => resp.json())
      .then((data) => setCarts(data));
  }, []);

  // add a clothing request
  const addClothing = (clothing) => {
    fetch("http://localhost:9292/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clothing),
    })
      .then((res) => res.json())
      .then((data) => {
        setClothes([...clothes, data]);
      });
  };

  // add cart

  const addCart = (cart) => {
    fetch("http://localhost:9292/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        setCarts([...carts, data]);
      });
  };

  const updateCart = (item) => {
    fetch(`http://localhost:9292/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        setCarts([...carts, data]);
      });
  };

  return (
    <MyContext.Provider
      value={{
        clothes: clothes,
        carts: carts,
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
