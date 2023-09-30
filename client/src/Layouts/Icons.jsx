import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export function home() {
  return (
    <div>
      <FontAwesomeIcon icon={faHouse} />
    </div>
  );
}
export function shopping() {
  return (
    <div>
      <FontAwesomeIcon icon={faBasketShopping} />
    </div>
  );
}
export function cart() {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
}
export function help() {
  return (
    <div>
      <FontAwesomeIcon icon={faHandshakeAngle} />
    </div>
  );
}
export function review() {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
}
