import React, { useContext } from "react";
import { moneyContext } from "../Grandpa/Grandpa";

const Sister = ({ house }) => {
  const [money, setMoney] = useContext(moneyContext);
  return (
    <div>
      <h4>Sister</h4>
      <p>
        <small>{house}</small>
      </p>
      <p>
        <small>{money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>add 1000</button>
    </div>
  );
};

export default Sister;
