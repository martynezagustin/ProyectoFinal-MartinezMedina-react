import React, { useEffect, useState } from "react"
import { API_URLS } from "../../constants"
import { useFetch } from "../../hooks/useFetch/useFetch"
import Item from "../../components/item/Item"
import { useNavigate, useParams } from "react-router-dom"
import ItemList from "../itemList/ItemList"
import { db } from "../../services"
import { collection, query, where } from "firebase/firestore"
import { getDocs } from "firebase/firestore"


function ItemListContainer() {
    const [cart, setCart] = useState([])
    const { data: products } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config)
    const [productList, setProductList] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(false)


    //FIREBASE
    useEffect(()=> {
        setLoading(true)
        const productsCollection = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products")
        getDocs(productsCollection)
        .then((result) => {
            const list = result.docs.map((product) => {
                return({
                    id:product.id,
                    ...product.data()
                }
                )
            })
            setProductList(list)
        })
        .catch((error) => {console.log(error)})
        .finally(setLoading(false))
    }, [categoryId])

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
                    <ItemList productos={productList} />
                </div>
            </>
        )
    }
}
export default ItemListContainer