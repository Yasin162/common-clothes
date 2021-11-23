import React, { useState } from "react";

import { MyConsumer } from "./MyContext";

const RequestItem = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [fabric, setFabric] = useState("");
  const [color, setColor] = useState("");

  const formName = e => {
    setName(e.target.value);
  };

  const formImgUrl = e => {
    setImgUrl(e.target.value);
  };

  const formPrice = e => {
    setPrice(e.target.value);
  };

  const formFabric = e => {
    setFabric(e.target.value);
  };

  const formColor = e => {
    setColor(e.target.value);
  };
  return (
    <MyConsumer>
      {context => {
        const addToClothing = context.addClothing;
        const handleSubmit = e => {
          e.preventDefault();
          const formData = {
            name: name,
            image: imgUrl,
            price: price,
            fabric: fabric,
            color: color,
          };
          // fetch('http://localhost:9292/items', {
          //     method: 'POST',
          //     headers: {
          //         "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify(formData)
          // })
          // .then(resp => resp.json())
          // .then(data => {
          //     addClothing(data)
          // })
          addToClothing(formData);
          setName("");
          setImgUrl("");
          setPrice("");
          setFabric("");
          setColor("");
        };

        return (
          <div class="form-div">
            <h1>Request an Item</h1>
            <form onSubmit={handleSubmit}>
              <label type="text">
                Name:{" "}
                <input
                  type="text"
                  name="text"
                  value={name}
                  onChange={formName}
                />
              </label>
              <br />
              <label type="text">
                Image Url:{" "}
                <input
                  type="text"
                  name="url"
                  value={imgUrl}
                  onChange={formImgUrl}
                />
              </label>
              <br />
              <label type="text">
                Estimated Price:{" "}
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={formPrice}
                />
              </label>
              <br />
              <label type="text">
                Fabric:{" "}
                <input
                  type="text"
                  name="fabric"
                  value={fabric}
                  onChange={formFabric}
                />
              </label>
              <br />
              <label type="text">
                Color:{" "}
                <input
                  type="text"
                  name="color"
                  value={color}
                  onChange={formColor}
                />
              </label>
              <br />
              <input type="submit" />
            </form>{" "}
          </div>
        );
      }}
    </MyConsumer>
  );
};

export default RequestItem;
