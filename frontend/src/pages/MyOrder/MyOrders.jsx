import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./MyOrders.css";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const { url, orderData, token } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="my-orders">
      <div className="cart-header">
        <h1>Your</h1>
        <h1 className="color-header">Orders</h1>
      </div>

      <div className="container">
        {orderData.map((order, orderIndex) => {
          return (
            <div key={orderIndex} className="order-wrapper">
              
              {/* Restaurant + Date */}
              <div className="container-restaurant">
                <div className="restaurant-date">
                  <h3>{order.items[0]?.restaurantId.name}</h3>
                  <p>{order.date}</p>
                  <p><p style={{scale:'0.6'}}>🟢</p>{order.status}</p>
                </div>
                <button className="view-restaurant">
                  VIEW RESTAURANT
                </button>
              </div>

              {/* Order Items */}
              <div className="container-order">
                {order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="order-item">
                    <img src={url + "/images/food/" + item.image} alt=""/>
                    <div className="details">
                      <p className="name">
                        {item.name} x {item.quantity}
                      </p>
                      <p className="price">${item.price}.00</p>
                      <p className="category">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total + Reorder */}
              <div className="container-total-reorder">
                <div className="total">
                  Total: ${order.amount}.00
                </div>
                <button className="reorder">
                  REORDER
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;