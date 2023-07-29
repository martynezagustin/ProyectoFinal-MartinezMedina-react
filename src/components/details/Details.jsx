import React from "react";
import "./details.css"

const Details = ({id, image, name, category, description, price, stock, addToCart}) => {
    return (
        <div key={id} className="detailProduct">
            <img src={image} alt={name} className="detailProductImg"/>
            <div className="cardBody">
                <h2>{name ? name.toUpperCase() : ''}</h2>
                <h3>{category}</h3>
                <p>{description}</p>
                <p>USD {price}</p>
                <button onClick={() => addToCart} className="detailProductButton">Add to cart</button>
            </div>
        </div>
    )
}

export default Details