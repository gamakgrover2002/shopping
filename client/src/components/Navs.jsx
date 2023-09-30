import React from "react";
import { Link } from "react-router-dom";
import { home, review } from "../Layouts/Icons";
import { shopping } from "../Layouts/Icons";
import { cart } from "../Layouts/Icons";
import { help } from "../Layouts/Icons";
import Location from "./Location";
function Navs() {
  const Links = [
    {
      to: "/",
      text: home(),
    },
    {
      to: "/shopping",
      text: shopping(),
    },
    {
      to: "./cart",
      text: cart(),
    },
    {
      to: "/help",
      text: help(),
    },
    {
      to: "/review",
      text: review(),
    },
  ];
  return (
    <div>
      <ul id="navbar">
        <li>
          {" "}
          <img
            src="https://www.nicepng.com/png/full/876-8760423_online-shopping-cart-png-free-file-transparent-shopping.png"
            alt="logo"
            height="50px"
            width="100px"
          />
        </li>
        {Links.map((e) => {
          return (
            <li key={e.to}>
              <Link id="nav-link" to={e.to}>
                {e.text}
              </Link>
            </li>
          );
        })}
        <div id="nav-location">
          <Location />
        </div>
      </ul>
    </div>
  );
}

export default Navs;
