import { createContext, useEffect, useState } from "react";
import { food_list, restaurant_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const[cartItems, setCartItems] = useState({
    restId: null,
    items: {}
  });

  const addToCart = (restId, itemId) => {
    setCartItems((prev)=>{
      // if cart is empty (no restaurant chosen)
      if(!prev.restId) {
        return {
          restId,
          items: { [itemId]:1 }
        };
      }

      // if same restaurant add items
      if(prev.restId === restId) {
        return {
          ...prev,
          items: { 
            ...prev.items,
            [itemId]: (prev.items[itemId] || 0) + 1
          }
        };
      }

      // if different restaurant show alert
      // alert("You can only add items from one restaurant at a time.");
      return prev;
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev.items[itemId]) return prev;

      const updatedItems = { ...prev.items };

      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1; // decrease by 1
      } else {
        delete updatedItems[itemId]; // remove if only 1
      }

      const rest_Id = Object.keys(updatedItems).length === 0 ? null : prev.restId;
      return { restId: rest_Id, items: updatedItems };
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems])

  const contextValues = {
    food_list,
    restaurant_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
