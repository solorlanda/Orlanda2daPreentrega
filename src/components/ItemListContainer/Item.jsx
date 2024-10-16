import { Link } from "react-router-dom";
// import { BsCart4 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { useContext } from "react";
import CartContext  from "../CartContext/CartContext";
// import { IoMdAddCircle } from "react-icons/io";
// import { IoIosRemoveCircle } from "react-icons/io";
import AddToCart from "../ShoppingCart/AddToCart";
import { IoIosRemoveCircle } from "react-icons/io";
import RemoveCart from "../ShoppingCart/RemoveCart";

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
            <h2 className="p-2">{product.nombre}</h2>
            <p className="p-2">${product.precio}</p>
            <img className="items-center w-48" src={product.imagen} alt={product.nombre} />
            <div className="flex flex-row gap-2">
            <Link to={`/detail/${product.id}`}>
                <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid">
                    <FaEye size="30px" />
                </button>
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
                    </div>
                    </>
                )
            }
            </div>
            </div>
        </div>
        </div>
        </>
    );
};
export default Item;