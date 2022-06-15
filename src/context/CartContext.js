import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  //modal context
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setOpen(true);
  };

  const total = cart.reduce((acc, value) => {
    acc += value.price;
    return acc;
  }, 0);

  const removeFromCart = (id) => {
    const remainItens = cart.filter((item) => item.id !== id);
    setCart(remainItens);
  };

  const createOrder = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        open,
        total,
        handleClose,
        handleAddToCart,
        removeFromCart,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
