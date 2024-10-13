import {useContext} from "react";
import CartContext  from "../CartContext/CartContext";

const ShoppingCart = () => {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.precio, 0
    );

return (
    <div>
        <div>
            <div>Items in cart: {quantity}</div>
            <div>total: ${totalPrice}</div>
            <button onClick={() => console.log(cart)}>Checkout</button>
        </div>
    </div>
)
};
export default ShoppingCart;