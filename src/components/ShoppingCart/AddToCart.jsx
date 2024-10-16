import { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import { BsCart4 } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import Swal from "sweetalert2";

export const AddToCart = ({ product, icon }) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const isItemFound = cart.find((item) => item.id === product.id);
        const currentQuantity = isItemFound ? isItemFound.quantity : 0;

        if (currentQuantity + 1 > product.stock) {
            Swal.fire({
                title: '¡Sin Stock!',
                text: 'No hay más stock disponible para este producto.',
                icon: 'error',
                confirmButtonText: 'Entendido',
                customClass: {
                    confirmButton: 'bg-celesteArgentina rounded-lg p-2 shadow-2xl border-2 border-amber-200'
                }
            });
            return;
        }

        setCart((currencyItems) => {
            if (isItemFound) {
                return currencyItems.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currencyItems, { id: product.id, nombre: product.nombre, precio: product.precio, stock: product.stock, imagen: product.imagen, quantity: 1 }];
            }
        });
        Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500
            });
    };


    return (
                <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid" onClick={addToCart}> {icon ? <IoMdAddCircle size="20px"/> : <BsCart4 size="30px" />}
                </button>
                );
};

export default AddToCart
