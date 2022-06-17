import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  //modal context
  const [open, setOpen] = useState(false);
  const [totalForEachItem, setTotalForEachItem] = useState(null);
  const [soldOff, setSoldOff] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cart, setCart] = useState([]);

  const stockControl = (bool) => setSoldOff(bool);

  const quantityControl = (product) => {
    if (product.stock === product.quantity) return stockControl(true);
    product.quantity += 1;
    return stockControl(false);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((prod) => prod.id === product.id);
    if (existingProduct) quantityControl(existingProduct);
    else {
      quantityControl(product);
      setCart([...cart, product]);
    }
    return handleOpen();
  };

  const total = cart.reduce((acc, value) => {
    acc += value.price;
    return acc;
  }, 0);

  const removeFromCart = (product) => {
    const remainItens = cart.filter((item) => item.id !== product.id);
    product.quantity = 0;
    stockControl(false);
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
        totalForEachItem,
        soldOff,
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
