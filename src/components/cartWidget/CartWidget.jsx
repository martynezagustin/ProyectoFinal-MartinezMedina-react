import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./style.css"

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext) //sumTotal() viene de context

    return (
        cartQuantity() > 0 &&
            <Link to={`/cart`} className="cart">
                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="cart-icon" width="20" />
                <span className="cartTotal">{cartQuantity()}</span>
            </Link>
    )
}

export default CartWidget