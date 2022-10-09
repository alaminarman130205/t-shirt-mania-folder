import React from "react";
import Tshirt from "../Tshirt/Tshirt";

const Cart = ({ cart, removeItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>please buy at least one item</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>amr jonno akta nao </h3>
        <h2>tomar jonno akta nao </h2>
      </div>
    );
  } else {
    message = <p>tnx for buying our item</p>;
  }
  return (
    <div>
      <h3>order quantity {cart.length}</h3>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name} <button onClick={() => removeItem(tshirt)}>X</button>{" "}
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>tin jon ke gift diba</p> : <p>kino aro kino</p>}
    </div>
  );
};

export default Cart;
