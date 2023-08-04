import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch/useFetch";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import './itemDetailContainer.css'
import { API_URLS } from "../../constants";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../services";

function ItemDetailContainer(){
    const { productId } = useParams()
    const [productDetail, setProductDetail] = useState({})
    const history = window.history
    const navigate = useNavigate()

    useEffect(() => {
        //Le decimos nuestra database
        const collectionProducts = collection(db, "products")
        //hacer una referencia que traiga el id de Param
        const referenceDoc = doc(collectionProducts, productId)
        //traer doc
        getDoc(referenceDoc)
        .then((result) => {
            setProductDetail({
                id: result.id,
                ...result.data()
            })
        })
        .catch((error) => console.log(error))
    })


    return (
        <>
            <div className="headerContainer">
                {history.length > 2 ? <button onClick={() => navigate(-1)} className="detailProductBack">&larr; Back</button> : null }
            </div>
            <ItemDetail item={productDetail} />
        </>
    )
}


export default ItemDetailContainer