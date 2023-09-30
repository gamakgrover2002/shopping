import React from "react";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import { useState } from "react";
import { useEffect } from "react";
import { Limitdata } from "../api/shows";
function Home() {
  const [Data, setData] = useState([]);
  const getData = async () => {
    const data = await Limitdata();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <HeroSection />
      <Cards />
      <Categories />
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
