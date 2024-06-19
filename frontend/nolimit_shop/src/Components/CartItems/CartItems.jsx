import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
    const { getTotalCardAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format">
                                <img className="cartitems-product-icon" src={e.image} alt={e.name} />
                                <p className="cartitems-product-title">{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quatity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                    onClick={() => removeFromCart(e.id)}
                                    className="cartitems-remove-icon"
                                    src={remove_icon}
                                    alt="Remove"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCardAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCardAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder="promo code" />
                    <button>Submit</button>
                </div>
                </div>
            </div>

        </div>
        
    );
};

export default CartItems;