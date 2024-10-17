import { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { RiDeleteBin2Line } from "react-icons/ri";

const DeleteCart = ({ product, showDeleteButton = false }) => {
    const [cart, setCart] = useContext(CartContext);


    const deleteCart = () => {
        Swal.fire({
            title: "¿Esta seguro que desea vaciar el carrito?",
            text: "No podrá recuperar su carrito de compra",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Carrito vacio",
                    text: "Se ha vaciado el carrito de compra.",
                    icon: "success",
                    confirmButtonColor: "#3085d6"
                }); setCart([]);
            }
        });
        
    };

    const deleteItems = (id) => {
        setCart((currentItems) => currentItems.filter((item) => item.id !== id));
    };

    return (
        <div>
            {showDeleteButton ? (
                <button onClick={() => deleteItems(product.id)}><RiDeleteBin6Line /></button>
            ) : (
                <button className="mt-3" onClick={deleteCart}><RiDeleteBin2Line /></button>
            )}
        </div>
    );
};

export default DeleteCart