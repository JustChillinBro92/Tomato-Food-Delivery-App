import { useContext } from "react";

import { StoreContext } from "../../context/StoreContext";
import "./MyOrders.css";

const MyOrders = () => {
  const {url, orderData} = useContext(StoreContext);
  let totalOrderAmt;

  return (
    <div className='my-orders'>
        <div className='cart-header'>
            <h1>Your</h1>
            <h1 className='color-header'>Orders</h1>
        </div>

        <div className='container'>
            <div className='container-restaurant'>
                <div className='restaurant-date'>
                    <h3>{orderData[0]?.items[0].restaurantId.name}</h3>
                    <p>{orderData[0]?.date}</p>
                </div>
                <button className='view-restaurant'>VIEW RESTAURANT</button>
            </div>

            {orderData.map((orderdata, index) => {
                totalOrderAmt = orderdata.amount;
                console.log(orderData);
                
                return (
                    <div key={index} className='container-order'>
                        {orderdata.items.map((item, index) => {
                            // console.log(item);
                            return (
                                <div key={index} className='order-item'>
                                    <img src={url+"/images/food/"+item.image} alt='' />
                                    <div className='details'>
                                        <p className='name'>{item.name} x {item.quantity}</p>
                                        <p className='price'>${item.price}.00</p>
                                        <p className='category'>{item.category}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}

            <div className='container-total-reorder'>
                <div className='total'>
                    Total: ${totalOrderAmt}.00
                </div>
                <button className='reorder'>REORDER</button>
            </div>
        </div>
    </div>
  )
}

export default MyOrders;