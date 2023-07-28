import React from "react"
import { API_URLS } from "../../constants"
import { useFetch } from "../../hooks/useFetch/useFetch"
import Item from "../../components/item/Item"
import Columns from "../../components/grid/Grid"
import { useNavigate, useParams } from "react-router-dom"

function Home() {
    const { data: products } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config)

    return (
        <>
            <h1>Tienda de Beats de Trap, Drill, RKT.</h1>
            <h2>Urban Diamond Beats</h2>
            <div className="divProducts">
                <Columns productos={products} {...products} />
            </div>
        </>
    )
}

export default Home