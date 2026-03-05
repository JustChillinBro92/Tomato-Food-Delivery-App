import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData(data => ({...data, [name]: value}));
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    food_list.map((item) => {
      if(cartItems.items[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems.items[item._id];
        orderItems.push(itemInfo);
      }
    })
    
    let orderData = {
      address: data,
      restaurantId: cartItems.restaurantId,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    }  
    
    const response = await axios.post(
      url+"/api/order/place", 
      orderData,
      { headers: { Authorization: `Bearer ${token}` } } 
    )

    if(response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error!");
    }


  }

  const navigate = useNavigate();

  useEffect(()=>{
    if(!token) {
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-header">
        <h1>Place</h1>
        <h1 className="color-header">Order</h1>
      </div>

      <div className="place-order-content">
        <div className="place-order-left">
          <h2 className="title">Delivery Information</h2>
          <div className="info-fields">
            <div className="multi-fields">
              <input required name="firstname" onChange={onChangeHandler} value={data.firstname} type="text" placeholder="First Name" />
              <input required name="lastname" onChange={onChangeHandler} value={data.lastname} type="text" placeholder="Last Name" />
            </div>
            <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address" />
            <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
            <div className="multi-fields">
              <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
              <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
            </div>
            <div className="multi-fields">
              <input required name="zip" onChange={onChangeHandler} value={data.zip} type="number" placeholder="Zip Code" />
              <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
            </div>
            <input required name="phone" onChange={onChangeHandler} value={data.phone} type="number" placeholder="Phone" />
          </div>
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="cart-total-details-container">
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </p>
              </div>
              <button type="submit">PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
