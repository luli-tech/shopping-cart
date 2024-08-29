import Nav from "./components/nav";
import React from "react";
import Body from "./components/body";
import Modal from "./overlay/modal";
import { useState, useReducer, useContext } from "react";
import API from "./APIs/productApi";

export const context = React.createContext();
let ACTIONS = {
  ADD_CART: "add_cart",
};
function cartTotal() {}
const CART = {
  cartlength: [],
  products: API,
  cartAmount: [],
};
let reducer = (state, action) => {
  if (action.type === ACTIONS.ADD_CART) {
    return {
      ...state,
      cartlength: [...state.cartlength, action.payload.item],
      cartAmount: [...state.cartAmount, action.payload.amount],
    };
  }
};
function App() {
  let [cart, dispatch] = useReducer(reducer, CART);

  function addToCart(item, amount) {
    dispatch({ type: ACTIONS.ADD_CART, payload: { item, amount } });
  }
  let [visible, setvisible] = useState(true);
  console.log(cart);
  return (
    <context.Provider value={{ addToCart, cart }}>
      <div className="main">
        <Nav setvisible={setvisible} visible={visible} />
        {!visible && <Modal setvisible={setvisible} visible={visible} />}
        <Body />
      </div>
    </context.Provider>
  );
}

export default App;
