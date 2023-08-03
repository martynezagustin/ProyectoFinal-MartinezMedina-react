import React, {useState, createContext} from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(x => x.id === id) //some chequea si es true o false 
    }

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id) //posicion del elemento
            cart[pos].quantity += quantity //accedo a la propiedad del index marcado y le sumo la cantidad
            setCart([...cart])
        } else {
            setCart([...cart, {...item, quantity:quantity}])
            console.log(...cart);
        }
    }

    console.log(...cart);

    const removeItem = (id) => {
        const products = cart.filter(x => x.id !== id) // filtra el id q encuentra
        setCart([...products])
    }

    const clear = () => {
        setCart([])
    }
    
    const sumTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider