import {useContext} from "react";
import CartContext  from "../CartContext/CartContext";
import AddToCart from "../ShoppingCart/AddToCart";
import RemoveCart from "../ShoppingCart/RemoveCart";
import { IoMdAddCircle } from "react-icons/io";

const ShoppingCart = ({product}) => {
    const [cart, setCart] = useContext(CartContext);

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(product.id)

return (
    <div key={product.id} className="flex flex-col justify-center items-center content-center justify-items-center font-letraH1 rounded-lg bg-celesteArgentina p-1 shadow-2xl border-solid border-4 border-white text-xl mt-8 m-2">
        <h2>{product.nombre}</h2>
        <div>
            <div>
                <img className="items-center w-48" src={product.imagen} alt={product.nombre} />
            </div>
            <div>
                <div>
                    <p>${product.precio}</p>
                    <p>Cantidad en Stock: {product.stock}</p>
                </div>
            </div>
            <div>
                    <div className="flex gap-2 justify-center items-center content-center justify-items-center">
                        <RemoveCart product={product} />
                        <div>{quantityPerItem}</div>
                        <AddToCart product={product} icon= {<IoMdAddCircle/>}/>
                    </div>
            </div>
        </div>
    </div>
)
};
export default ShoppingCart;