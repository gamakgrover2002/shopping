import React from "react";
import { useEffect } from "react";
import { getLocation } from "../api/address";
import { useState } from "react";
function Location() {
  const [lat, Setlat] = useState(0);
  const [lang, Setlang] = useState(0);
  const [address, Setaddress] = useState("default");
  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      Setlat(position.coords.latitude);
      Setlang(position.coords.longitude);
    });
  };

  const getaddress = async () => {
    const res = await getLocation(lat, lang);
    Setaddress(res);
  };

  useEffect(() => {
    getCoordinates();
  }, []);
  return (
    <div id="location">
      <button id="location-btn" onClick={getaddress}>
        Click to get address
      </button>
      <center>
        <div id="address-text">{address}</div>
      </center>
    </div>
  );
}

export default Location;
