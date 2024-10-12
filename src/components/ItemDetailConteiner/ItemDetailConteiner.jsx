import { useState, useEffect } from "react";
import getProducts from "../../data/getProducts";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState({})
    const {idProduct} = useParams()
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getProducts
        .then((respuesta)=> {
            const newProduct = respuesta.find((product)=> product.id=== Number(idProduct))
            setProduct(newProduct)
        })
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false));
    },[idProduct])

    return(
        <>
        {loading ? <Loading/> : <ItemDetail product={product}/>}
        </>
    )
}
    export default ItemDetailConteiner;