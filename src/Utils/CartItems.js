import { createContext } from "react";

const CartItems = createContext({
  items: []
});

CartItems.displayName = "CartItems";

export default CartItems;
