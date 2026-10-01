import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    count: 0,
    total: 0,
    items: [],
  });

  const addToCart = (itemName, price) => {
    setCart((prev) => ({
      count: prev.count + 1,
      total: prev.total + price,
      items: [...prev.items, { name: itemName, price }],
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);