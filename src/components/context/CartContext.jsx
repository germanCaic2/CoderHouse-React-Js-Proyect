import React, { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const hi = () => {
    console.log("What's going on?");
  }

  return(
    <CartContext.Provider value={{hi}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;