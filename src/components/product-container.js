import React, { useState } from "react";

function Products({ add, cart }) {
  const [value, setvalue] = useState("0");
  function pass(m) {
    return Number(m);
  }
  return (
    <div className="product-container">
      {cart.products.map((list, i) => (
        <div key={list.id} className="product-lists">
          <div className="product-info">
            <h5 className="title">{list.name}</h5>
            <p className="description">{list.desc}</p>
            <p className="price">${pass(list.price)}</p>
          </div>
          <div className="product-control">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input">
                <label>Amount</label>
                <input
                  onChange={(e) => setvalue(e.target.value)}
                  value={value[i + 1]}
                  type="number"
                  min="1"
                  max="5"
                  step="1"
                />
              </div>
              <button
                onClick={() => {
                  add(value, list.price);
                }}
              >
                +Add
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
