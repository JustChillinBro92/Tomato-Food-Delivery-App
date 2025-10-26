import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'

import { StoreContext } from '../../context/StoreContext'
import './Cart.css'

const Cart = () => {
  const {food_list, restaurant_list, cartItems, addToCart, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-header'>
        <h1>Your</h1> 
        <h1 className='color-header'>Cart</h1>
      </div>
      <div className='cart-items'>
        <div className='cart-items-title'>
          {
            food_list.map((item, index) => {              
              if(cartItems.items[item._id] > 0) {
                return ( 
                  <div className='cart-item-details' key={index}>
                    <img src={item.image} alt="" />
                    <div className='cart-item-details-name'>
                      <p className='item-name'>{item.name}</p> 
                      <p className='rest-name'>{restaurant_list.find(R => R.restaurantId === item.restaurantId)?.name}</p>
                    </div>
                    <div className='cart-item-counter-price-trash'>
                      {
                        <div className='cart-item-counter-price-container'>
                          <div className='cart-item-counter-container'>
                            <div className='cart-item-counter'>
                              <FontAwesomeIcon icon={faMinus} className='cart-operation-icon' onClick={()=> removeFromCart(item._id)}/>
                                {cartItems.items[item._id]}
                              <FontAwesomeIcon icon={faPlus} className='cart-operation-icon' onClick={()=> addToCart(item.restaurantId, item._id)}/>
                            </div>
                          </div>
                          <p>${item.price * cartItems.items[item._id]}</p>
                        </div>      
                      }
                      <div className='cart-item-trash'>
                        <FontAwesomeIcon icon={faTrash} className='trash-icon'/> 
                      </div>
                    </div>
                  </div>
                )
              }
            }) 
          }
        </div>
      </div>

      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div className='cart-total-details-container'>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
            </div>
            <button onClick={()=>navigate('/orders')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        
        <div className='cart-promocode'>
          <h2>Promo Code</h2>
          <div className='cart-promocode-container'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart