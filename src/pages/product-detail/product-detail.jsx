import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch/useFetch";
import Details from "../../components/details/Details";
import { API_URLS } from "../../constants";

function ProductDetail(){
    const { productId } = useParams()
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`
    const navigate = useNavigate()

    const { data } = useFetch(urlProductDetail, API_URLS.PRODUCTS.config)
    return (
        <>
            <div className="headerContainer">

            </div>
            <Details {...data} />
        </>
    )
}


export default ProductDetail