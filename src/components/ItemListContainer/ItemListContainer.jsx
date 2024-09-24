import { useEffect, useState } from "react";
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"


function ItemListContainer({ greetings }) {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        getProducts
        .then((respuesta)=> {
            if(idCategory){
                const newProducts = respuesta.filter((product) => product.category===idCategory)
                setProducts(newProducts);
            } else {
                setProducts(respuesta);
            }
        })
        .catch(error => console.error(error))
    }, [idCategory])

    return (
        <div>
            <h1 className="text-center font-letraH1 mt-14 text-3xl mb-8">{greetings}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer