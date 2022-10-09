import React from "react";
import Special from "../Special/Special";

const Myself = ({ house, ring }) => {
  return (
    <div>
      <h4>champ</h4>
      <p>
        <small>{house}</small>
      </p>
      <Special house={house} ring={ring}></Special>
    </div>
  );
};

export default Myself;
