import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import getProducts from "../../data/Products";

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState({})
    const {idProduct} = useParams()
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        setLoading(true);
        getProducts()
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