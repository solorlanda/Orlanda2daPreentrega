
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import CartContext  from "../CartContext/CartContext";

function CartWidget() {
    const [cart, setCart] = useContext(CartContext);
    const quantity = cart.reduce((acum, currency) => {
        return acum + currency.quantity;
    },0);
    return(
    <div className="relative p-2.5">
        <button>
        <BsCart4 size="40px"/>
        <span className="absolute top-0 right-0 bg-celesteArgentina text-[16px] px-2 rounded-full border-solid border border-white">{quantity}</span>
        </button>
    </div>
    )
}

export default CartWidget