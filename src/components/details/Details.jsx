import React from "react";

const Details = ({id, image, name, category, description, price, stock, addToCart}) => {
    return (
        <div key={id}>
            <img src={image} alt={name} />
            <div className="cardBody">
                <h2>{name}</h2>
                <h3>{category}</h3>
                <p>{description}</p>
                <p>USD {price}</p>
                <button onClick={() => addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default Details