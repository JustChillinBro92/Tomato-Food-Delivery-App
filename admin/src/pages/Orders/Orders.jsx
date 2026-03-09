import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";

import "./Orders.css";

const Orders = ({ backend_url }) => {
  const [list, setList] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(`${backend_url}/api/order/list`);
    console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const statusHandler = async (event, order_Id) => {
    const response = await axios.post(`${backend_url}/api/order/status`, {
      orderId: order_Id,
      status: event.target.value
    })

    if(response.data.success) {
      await fetchOrders();
    } else {
      toast.error(response.data.message);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className='order flex-col'>
      <h3>ALL ORDER ENTRIES</h3>
      <div className='order-list'>
        <div className='order-list-table-format title'>
          <b>Restaurant</b>
          <b>Customer Details</b>
          <b>Items</b>  
          <b>Total Price</b>
          <b>Order Status</b>
        </div>

        {list.map((order, orderIndex) => {
          return (
            <div key={orderIndex} className='order-list-item fit-content'>
              <div className='restaurant-name-img'>
                <p>Name: {order.items[0]?.restaurantId.name}</p>
                <p>Id: {order.restaurantId}</p>
                <img src={`${backend_url}/images/restaurant/${order.items[0].restaurantId.image}`} alt=""/>
              </div>

              <div className='customer-details fit-content'>
                <p>Name: {order.address.firstname} {order.address.lastname}</p>
                <p>Id: {order.userId}</p>
                <p>Ph: {order.address.phone}</p>
                <p>Country: {order.address.country}</p>
                <p>State: {order.address.state}</p>
                <p>City: {order.address.city}</p>
                <p>Zip: {order.address.zip}</p>
                <p>Street: {order.address.street}</p>
              </div>

              <div className='item-container fit-content'>
                {order.items.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className='item-details'>
                      <li>{item.name} x {item.quantity}</li>
                    </div>
                  );
                })}
              </div>

                <div className='total-price fit-content'>
                  <p>Items: {order.items.length}</p>
                  <p>Price: ${order.amount}</p>
                </div>

                <div className='order-status fit-content'>
                  <select onChange={(event)=>statusHandler(event, order._id)} value={order.status}>
                    <option value="Order Confirmed!">Order Confirmed!</option>
                    <option value="Out for delivery!">Out for delivery!</option>
                    <option value="Delivery Confirmed!">Delivery Confirmed!</option>
                    <option value="Order Cancelled!">Order Cancelled!</option>
                  </select>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
