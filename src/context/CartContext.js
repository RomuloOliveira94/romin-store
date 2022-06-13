import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  const total = cart.reduce((acc, value) => {
    acc += value.price;
    return acc;
  }, 0);
  const removeFromCart = (id) => {
    const remainItens = cart.filter((item) => item.id !== id);
    setCart(remainItens);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, total, handleAddToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
