import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [soldOff, setSoldOff] = useState(false);

  const [cart, setCart] = useState([]);

  const stockControl = (bool) => setSoldOff(bool);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((prod) => prod.id === product.id);

    if (existingProduct) quantityControl(existingProduct);
    else {
      product.quantity = 1;
      //quantityControl(product);
      product.values = product.price;
      setCart((prev) => [...prev, product]);
      console.log(product.quantity);
    }

    return;
  };

  const totalForEachItem = (product) => {
    const total = cart
      .filter((prod) => prod.id === product.id)
      .map((prod) => prod.price * prod.quantity)
      .reduce((acc, value) => acc + value, 0);
    return total;
  };

  const quantityControl = (product) => {
    if (product.stock === product.quantity) return stockControl(true);
    setCart((prev) =>
      prev.map((prod) => {
        if (prod.id === product.id)
          return {
            ...prod,
            quantity: (product.quantity += 1),
            values: totalForEachItem(product),
          };
        return prod;
      })
    );
    console.log(product.quantity);
    stockControl(false);
  };

  const incrementItem = (product) => {
    quantityControl(product);
  };

  const removeFromCart = (product) => {
    const remainItens = cart.filter((item) => item.id !== product.id);
    product.quantity = 0;
    stockControl(false);
    setCart(remainItens);
  };

  const createOrder = () => {
    cart.map((itens) => (itens.quantity = 0));
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        soldOff,
        handleAddToCart,
        removeFromCart,
        createOrder,
        incrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
