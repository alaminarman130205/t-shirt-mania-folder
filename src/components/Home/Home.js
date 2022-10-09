import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const tshirt = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddtoCart = (tshirt) => {
    const exists = cart.find((ts) => ts._id == tshirt._id);
    if (exists) {
      // alert("tshirt already added");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
      // alert("successfully added");
    }
  };
  const removeItem = (tshirt) => {
    const remaining = cart.filter((ts) => ts._id !== tshirt._id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirt.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddtoCart={handleAddtoCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeItem={removeItem}></Cart>
      </div>
    </div>
  );
};

export default Home;
