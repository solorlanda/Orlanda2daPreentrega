import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const Item = ({ product }) => {
    const [cart, setCart] = useContext(CartContext);
    const id = product.id;

    const addToCart = () => {
        setCart((currencyItems) => {
            const isItemFound = currencyItems.find((item) => item.id === id);
            if (isItemFound) {
                return currencyItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currencyItems, { id: product.id, nombre: product.nombre, precio: product.precio, imagen: product.imagen, quantity: 1 }];
            }
        });
    };

    const removeItem = () => {
        setCart((currencyItems) => {
            if (currencyItems.find((item) => item.id === id)?.quantity === 1) {
                return currencyItems.filter((item) => item.id !== id);
            } else {
                return currencyItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(id);

    return (
        <div className="flex" key={product.id}>
            <div className="flex flex-col justify-center items-center content-center justify-items-center font-letraH1 rounded-lg w-96 bg-celesteArgentina p-1 shadow-2xl border-solid border-4 border-white hover:border-dotted text-xl">
                {quantityPerItem > 0 && <div>{quantityPerItem}</div>}
                <h2 className="p-2">{product.nombre}</h2>
                <p className="p-2">${product.precio}</p>
                <div className="space-x-4">
                <Link to={`/detail/${product.id}`}>
                    <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid">
                        <FaEye size="30px" />
                    </button>
                </Link>
                <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid mt-2" onClick={addToCart}>
                    <BsCart4 size="30px" />
                </button>
                </div>
                <img className="w-48 p-2" src={product.imagen} alt={product.nombre} />
            </div>
        </div>
    );
};

export default Item;