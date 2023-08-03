import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    

    const addToCart = (quantity) => {
        if(counter <= itemStock){
            setCounter(1)
            setItemStock(itemStock - quantity)
            setSold(true)
            onAdd(quantity)
        }
    }

    return (
        <div>
            <button onClick={() => {addToCart(counter)}}>Agregar al carrito</button>
            <button onClick={() => {incrementCount}}>+</button>
            <button onClick={() => {decrementCount}}>-</button>
        </div>
    )
}

export default ItemCounter