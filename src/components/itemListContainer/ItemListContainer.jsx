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

        return (
            <>
                <h1>Tienda de Beats de Trap, Drill, RKT.</h1>
                <h2>Urban Diamond Beats</h2>
                <div className="divProducts">
                    {loading ? <p>Cargando...</p> : <ItemList productos={productList} />}
                </div>
            </>
        )
    } 
export default ItemListContainer