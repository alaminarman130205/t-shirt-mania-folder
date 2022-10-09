import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ house, ring }) => {
  return (
    <div>
      <h4>Cousin</h4>
      <p>
        <small>{house}</small>
      </p>
      <Friend ring={ring}></Friend>
    </div>
  );
};

export default Cousin;
