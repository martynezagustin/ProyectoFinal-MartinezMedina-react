import React, { useState } from "react";

const ItemCounter = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock)
    const [sold, setSold] = useState(false)

    const decrementCount = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

    const incrementCount = () => {
        if(counter < itemStock){
            setCounter(counter + 1)
        }
    }
    

    const addToCart = (counter) => {
            onAdd(counter)
    }

    return (
        <div>
            <button onClick={() => {addToCart(counter)}}>Agregar al carrito</button>
            <button onClick={incrementCount}>+</button>
            <span>{counter}</span>
            <button onClick={decrementCount}>-</button>
        </div>
    )
}

export default ItemCounter