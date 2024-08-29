import Header from "./header";
import Products from "./product-container";
import React, { useContext } from "react";
import { context } from "../App";

function Body() {
  const { addToCart, cart } = useContext(context);

  function add(item, amount) {
    addToCart(item, amount); // Pass the item object to the addToCart function
  }

  return (
    <div className="body-container">
      <Header />
      <Products add={add} cart={cart} />
    </div>
  );
}

export default Body;
