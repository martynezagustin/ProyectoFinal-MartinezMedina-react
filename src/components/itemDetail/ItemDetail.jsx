import { useContext } from "react"
import "./details.css"
import { CartContext } from "../../context/CartContext"
import ItemCounter from "../itemCounter/ItemCounter"

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div key={item.id} className="detailProduct">
            <img src={item.image} alt={item.name} className="detailProductImg"/>
            <div className="cardBody">
                <h2>{item.name}</h2>
                <h3>{item.category}</h3>
                <p>{item.description}</p>
                <p>USD {item.price}</p>
                <ItemCounter onAdd={onAdd} stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail