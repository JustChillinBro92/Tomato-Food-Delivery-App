import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { StoreContext } from "../../context/StoreContext";
import "./MyOrders.css";

const MyOrders = () => {
  const { url, orderData, token } = useContext(StoreContext);
  const navigate = useNavigate();

  const formatOrderDate = (iso) => {
    const d = new Date(iso);

    const getOrdinal = (n) => {
      if(n > 3 && n < 21) return n + "th";
      switch(n % 10) {
        case 1: return n + "st";
        case 2: return n + "nd";
        case 3: return n + "rd";
      }
    }

    const year = d.toLocaleString("en-US", { year : "numeric" });
    const month = d.toLocaleString("en-US", { month : "long" });
    const day = getOrdinal(d.getDate());
    const time = d.toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

    return `${month} ${day} ${year}, ${time}`;
  }

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
                  <p>Ordered: {formatOrderDate(order.date)}
                  </p>
                  <p className="order-status">
                    <span className="dot">
                      {
                        order.status === "Order Confirmed!" ? "🔵" :
                        order.status === "Out for delivery!" ? "🟡" :
                        order.status === "Delivery Confirmed!" ? "🟢" :
                        "🟠"
                      }
                    </span>
                    <span className="status">{order.status}</span>
                  </p>
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