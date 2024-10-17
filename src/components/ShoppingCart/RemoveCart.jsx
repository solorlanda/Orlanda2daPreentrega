import { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import { IoIosRemoveCircle } from "react-icons/io";


const RemoveCart = ({product}) => {
    const [cart, setCart] = useContext (CartContext);

    const removeCart = (id) => {
        setCart((currentItems) => {
            if(currentItems.find((item) => item.id === product.id) ?.quantity === 1){
                return currentItems.filter((item) => item.id !== id);
            } else {
                return currentItems.map((item) => {
                    if(item.id === product.id){
                        return{...item, quantity: item.quantity -1};
                    } else {
                        return item;
                    }
                })
            }
        })
    }
    return (
        <>
        <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid h-10" onClick={() => removeCart(product.id)}><IoIosRemoveCircle size="20px"/></button>
        </>
    )
}
export default RemoveCart