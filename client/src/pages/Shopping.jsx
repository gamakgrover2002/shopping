import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [Data, setData] = useState([]);
  const [option, Setoption] = useState("electronics");

  const onRadioChange = (ev) => {
    Setoption(ev.target.value);

    getData(ev.target.value);
  };

  const getData = async (option) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${option}`
    );
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    getData(option);
  }, []);
  return (
    <div>
      <div>
        <label>
          <input
            className="checkbox"
            type="radio"
            value="electronics"
            checked={option === "electronics"}
            onChange={onRadioChange}
          />
          Electronics
        </label>
        <br />
        <label>
          <input
            className="checkbox"
            type="radio"
            value="jewelery"
            checked={option === "jewelery"}
            onChange={onRadioChange}
          />
          Jewelery
        </label>
        <br />
        <label>
          <input
            className="checkbox"
            type="radio"
            value="men's clothing"
            checked={option === "men's clothing"}
            onChange={onRadioChange}
          />
          Men's Clothing
        </label>
        <br />
        <label>
          <input
            className="checkbox"
            type="radio"
            value="women's clothing"
            checked={option === "women's clothing"}
            onChange={onRadioChange}
          />
          Women's Clothing
        </label>
      </div>

      <div id="items">
        {Data.map((item) => (
          <div id="card">
            <img src={item.image} height="150px" width="150px" alt="img" />
            <br />
            <div id="item-name" key={item.id}>
              <b>{item.title}</b>
            </div>
            <br />
            <p>₹{Math.round(item.price * 80)}</p>
            <button id="buy">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
