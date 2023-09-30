import React from "react";
import { useState } from "react";

function Help() {
  const [message, Setmessage] = useState("");
  const [complaintnumber, Setcomplaintnumber] = useState();

  const generatecomplaint = () => {
    var x = 100000 * Math.random();
    x = Math.floor(x);
    Setcomplaintnumber(x);
  };

  const handleSearch = () => {
    Setmessage(
      "Your problem will be solved as soon as possible. Sorry for the inconvenience"
    );
    generatecomplaint();
  };

  const Onserach = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <>
      <div id="help">
        <center>
          <h1>Do you need any Help !</h1>
          <input
            onKeyDown={Onserach}
            placeholder="tell us about it.Maybe we can help with it"
            type="text"
          ></input>
          <h3>{message}</h3>
          <h5>Your complaint number number is :</h5>

          <h2>{complaintnumber}</h2>
        </center>
      </div>
      <div id="help2">{}</div>
    </>
  );
}

export default Help;
