import { useEffect, useState } from "react";
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"


function ItemListContainer({ greetings }) {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();
    const {idSearch} = useParams();

    useEffect(() => {
        getProducts
        .then((respuesta)=> {
            if(idCategory){
                const newProducts = respuesta.filter((product) => product.category===idCategory)
                setProducts(newProducts);
            } else if (idSearch) {
                const newProducts = respuesta.filter((product) => product.nombre.toLowerCase().includes(idSearch.toLowerCase()))
                setProducts(newProducts);
            } else {
                setProducts(respuesta);
            }
        })
        .catch(error => console.error(error))
    }, [idCategory, idSearch])

    return (
        <div>
            <h1 className="text-center font-letraH1 mt-14 text-3xl mb-8">{greetings}</h1>
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer