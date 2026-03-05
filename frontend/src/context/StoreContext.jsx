import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";

  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({
    restaurantId: null,
    items: {},
  });
  const [orderData, setOrderData] = useState([]);
  const [food_list, setFoodList] = useState([]);
  const [restaurant_list, setRestaurantList] = useState([]);

  const handleAuthError = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({ restaurantId: null, items: {} });
    setOrderData([]);
  }

  const addToCart = async (restaurantId, itemId) => {
    if (token) {
      setCartItems((prev) => {
        // if cart is empty (no restaurant chosen)
        if (!prev.restaurantId) {
          return {
            restaurantId,
            items: { [itemId]: 1 },
          };
        }

        // if same restaurant add items
        if (prev.restaurantId === restaurantId) {
          return {
            ...prev,
            items: {
              ...prev.items,
              [itemId]: (prev.items[itemId] || 0) + 1,
            },
          };
        }

        // if different restaurant show alert
        alert("You can only add items from one restaurant at a time.");
        return prev;
      });

      try {
        await axios.post(
          url + "/api/cart/add",
          { restaurantId, foodId: itemId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        if(error.response?.status === 401)
          handleAuthError();
      }
    } else {
      alert("Login to add to cart!");
    }
  };

  const removeFromCart = async (itemId) => {
    if (token) {
      setCartItems((prev) => {
        if (!prev.items[itemId]) return prev;

        const updatedItems = { ...prev.items };

        if (updatedItems[itemId] > 1) {
          updatedItems[itemId] -= 1; // decrease by 1
        } else {
          delete updatedItems[itemId]; // remove if only 1
        }

        const rest_Id =
          Object.keys(updatedItems).length === 0 ? null : prev.restaurantId;
        return { restaurantId: rest_Id, items: updatedItems };
      });

      try {
        await axios.post(
          url + "/api/cart/remove",
          { foodId: itemId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        if(error.response?.status === 401)
          handleAuthError();
      }
    } else {
      alert("Login to remove from cart!");
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    if(!cartItems?.items) return totalAmount;

    for (let item in cartItems.items) {
      let food_quantity = cartItems.items[item];
      let foodInfo = food_list.find((food) => food._id === item);

      if (foodInfo && food_quantity > 0) {
        totalAmount += foodInfo.price * food_quantity;
      }
    }

    return totalAmount;
  };

  const fetchList = async () => {
    const food_response = await axios.get(url + "/api/food/list");
    const restaurant_response = await axios.get(url + "/api/restaurant/list");

    setFoodList(food_response.data.data);
    setRestaurantList(restaurant_response.data.data);
  };

  const fetchCart = async (token) => {
    try {
      const cart_response = await axios.get(url + "/api/cart/get", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCartItems(cart_response.data.cart?? { restaurantId: null, items: {} });
    } catch (error) {
      if(error.response?.status === 401)
        handleAuthError();
    }
  };

  const fetchOrder = async (token) => {
    try {
      const order_response = await axios.get(url+"/api/order/userorders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      setOrderData(order_response.data.data);
    } catch (error) {
      if(error.response?.status === 401)
        handleAuthError();
    }
  }

  useEffect(() => {
    async function loadData() {
      await fetchList();

      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
        await fetchCart(token);
        await fetchOrder(token);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValues = {
    food_list,
    restaurant_list,
    orderData,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
