import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext  from "../CartContext/CartContext";
import AddToCart from "../ShoppingCart/AddToCart";
import { IoIosRemoveCircle } from "react-icons/io";
import RemoveCart from "../ShoppingCart/RemoveCart";
import DeleteCart from "../ShoppingCart/DeleteCart";

const Item = ({ product }) => {
    const [cart, setCart] = useContext(CartContext);

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(product.id);

    return (
    <>
        <div className="flex" key={product.id}>
        <div className="flex flex-col justify-center items-center content-center justify-items-center font-letraH1 rounded-lg w-80 bg-celesteArgentina p-1 shadow-2xl border-solid border-4 border-white hover:border-dotted text-xl">
        <Link to={`/detail/${product.id}`}>
            <h2 className="p-2 text-center">{product.nombre}</h2>
            <p className="p-2 text-center">${product.precio}</p>
            <div className="flex justify-center">
                <img className="w-48" src={product.imagen} alt={product.nombre} />
            </div>
            </Link>
            
            <div>
        
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
                        <div className="mt-3">
                        <DeleteCart product={product} showDeleteButton={true}/>
                        </div>
                    </div>
                    
                    </>
                )
            }
            </div>
            </div>
        </div>
        </>
    );
};
export default Item;