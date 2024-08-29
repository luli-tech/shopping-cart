import React, { useContext, useState } from "react";
import { context } from "../App";
function Nav({ setvisible }) {
  const { cart } = useContext(context);
  let long = cart.cartlength.map(Number);
  let coun = long.reduce((i, m) => {
    return i + +m;
  }, 0);
  return (
    <nav>
      <div className="nav-control">
        <div className="logo">
          <p>ReactMeals</p>
        </div>
        <div onClick={() => setvisible(false)} className="show-order-container">
          <div className="cart-logo"></div>
          <div className="cart">Your Cart</div>
          <div className="cart-counter">{coun}</div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
