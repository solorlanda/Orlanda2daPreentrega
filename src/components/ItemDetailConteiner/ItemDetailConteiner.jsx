import { useState, useEffect, useContext } from "react";
import getProducts from "../../data/getProducts";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import CartContext from "../CartContext/CartContext";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState({})
    const {idProduct} = useParams()
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        // const db = getFirestore();
        // const refDoc = doc(db, "items", idProduct);
        // getDoc(refDoc).then((snapshot) => {
        //     setItems({id: snapshot.id, ...snapshot.data})
        //     .finally(() => setLoading(false));
        // }, [idProduct]);


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