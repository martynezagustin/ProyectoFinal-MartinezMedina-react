import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch/useFetch";
import Details from "../../components/details/Details";
import './itemDetailContainer.css'
import { API_URLS } from "../../constants";

function ItemDetailContainer(){
    const { productId } = useParams()
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`
    const navigate = useNavigate()
    const history = window.history

    const { data } = useFetch(urlProductDetail, API_URLS.PRODUCTS.config)
    return (
        <>
            <div className="headerContainer">
                {history.length > 2 ? <button onClick={() => navigate(-1)} className="detailProductBack">&larr; Back</button> : null }
            </div>
            <Details {...data} />
        </>
    )
}


export default ItemDetailContainer