import { useEffect, useState } from "react";
import getProducts from "../../data/getProducts";
import { useParams, useNavigate } from "react-router-dom"; // Importar useNavigate
import ItemList from "./ItemList";
import Loading from "../Loading/Loading";

function ItemListContainer({ greetings }) {
    const [products, setProducts] = useState([]);
    const { idCategory, idSearch } = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook para la navegación

    useEffect(() => {
        setLoading(true);
        getProducts
            .then((respuesta) => {
                let newProducts = [];
                if (idCategory) {
                    newProducts = respuesta.filter((product) => product.category === idCategory);
                } else if (idSearch) {
                    newProducts = respuesta.filter((product) =>
                        product.nombre.toLowerCase().includes(idSearch.toLowerCase())
                    );
                } else {
                    newProducts = respuesta;
                }

                if (newProducts.length === 0) {
                    navigate("/404");
                } else {
                    setProducts(newProducts);
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [idCategory, idSearch, navigate]);

    return (
        <div>
            <h1 className="text-center font-letraH1 mt-14 text-3xl mb-8">{greetings}</h1>
            {loading ? <Loading /> : <ItemList products={products} />}
        </div>
    );
}

export default ItemListContainer;