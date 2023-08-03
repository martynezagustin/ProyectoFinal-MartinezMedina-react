import React, { useState } from "react"
import { API_URLS } from "../../constants"
import { useFetch } from "../../hooks/useFetch/useFetch"
import Item from "../../components/item/Item"
import { useNavigate, useParams } from "react-router-dom"
import ItemList from "../itemList/ItemList"

function ItemListContainer() {
    const { categoryId } = useParams()
    const [cart, setCart] = useState([])
    const { data: products } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config)

    if (categoryId) {
        const productByCategory = products.filter((product) => product.category === categoryId)

        return (
            <>
                <h1>Tienda de Beats de Trap, Drill, RKT.</h1>
                <h2>Urban Diamond Beats</h2>
                <div className="divProducts">
                    <ItemList productos={productByCategory} />
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1>Tienda de Beats de Trap, Drill, RKT.</h1>
                <h2>Urban Diamond Beats</h2>
                <div className="divProducts">
                    <ItemList productos={products} />
                </div>
            </>
        )
    }
}
export default ItemListContainer