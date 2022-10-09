import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAddtoCart }) => {
  const { name, picture, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h1>name:{name} </h1>
      <h4>price:{price}</h4>
      <button onClick={() => handleAddtoCart(tshirt)}>buy this</button>
    </div>
  );
};

export default Tshirt;
