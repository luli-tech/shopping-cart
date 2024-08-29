import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { context } from "../App";

const overlayElement = document.getElementById("overlay");
const modalOverlay = document.getElementById("modal");

function Modal({ setvisible }) {
  let [amount, setamount] = useState();
  let { cart } = useContext(context);
  let bro = cart.cartAmount.map(Number);
  let total = bro.reduce((m, i) => {
    let it = m + i;
    return it;
  }, 0);

  console.log(bro);

  function Overlay() {
    return (
      <div className="modal">
        <div>
          <h4>sushi</h4>
        </div>
        <div className="modal-total-amount">
          <p>Total Amount</p>
          <p>{total}</p>
        </div>
        <div className="modal-btn">
          <button onClick={() => setvisible(true)}>Close</button>
          <button>Order</button>
        </div>
      </div>
    );
  }

  function ModalOverlay() {
    return (
      <div onClick={() => setvisible(true)} className="modal-content"></div>
    );
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay />, overlayElement)}
      {ReactDOM.createPortal(<ModalOverlay />, modalOverlay)}
    </Fragment>
  );
}

export default Modal;
