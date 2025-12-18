import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);
  return isCartEmpty ? ( 
    <>
      <div className="empty-cart">
        <h3>Looks like your cart is empty :( <br /> Browse our most delectable meals <Link to={'/'}><span>here</span></Link>. </h3>

      </div>
    </>
    
  ) : (
    <div className="cart-page">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p>
                    <RxCross2
                      className="RxCross2"
                      onClick={() => removeFromCart(item._id)}
                    />
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{0}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{0}</b>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo-code">
          <div>
            <p>Enter a promo-code!</p>
            <div className="promo-code-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
