import { useContext } from "react";
import CartContext  from "../CartContext/CartContext";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import AddToCart from "../ShoppingCart/AddToCart";
import RemoveCart from "../ShoppingCart/RemoveCart";
import { IoIosRemoveCircle } from "react-icons/io";

const ItemDetail = ({product}) => {
    const [cart, setCart] = useContext(CartContext);

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(product.id);
    return(
        <div className="flex flex-col justify-center items-center content-center justify-items-center font-letraH1 rounded-lg bg-celesteArgentina p-1 shadow-2xl border-solid border-4 border-white hover:border-dotted text-xl mt-8 m-2 font-semibold w-1/2">
            <div>
            <h1 className="items-center">{product.nombre}</h1>
            <img className="items-center w-96" src={product.imagen} alt={product.nombre} />
            <div className="flex gap-2 justify-center items-center content-center justify-items-center">
            <Link to={"/"}>
            <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid ">      <IoHome size="30px"/></button> 
            </Link>
            {
                quantityPerItem === 0 ? (
                    <AddToCart product={product}/>
                ) : (
                    <>
                    <div className="flex gap-2">
                        <RemoveCart product={product} />
                        <div>
                            {quantityPerItem}
                        </div>
                        <AddToCart product={product} icon={<IoIosRemoveCircle />}/> 
                    </div>
                    </>
                )
            }
            </div>
            </div>
            <p className="items-center mt-3">${product.precio}</p>
            <p className="items-center">{product.descripcion}</p>
            <p>{product.stock} unidades disponibles.</p>
            
        </div>
    )
}
export default ItemDetail