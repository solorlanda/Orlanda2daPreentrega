import { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import ShoppingCart from "./ShoppingCart";
import carritoVacio from "../../assets/carritoVacio.png";

function CartList () {
    const [cart, setCart] = useContext (CartContext);
    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.quantity * curr.precio, 0)

    return (
        <>
        <h2 className="flex flex-grow justify-center mt-4 font-letraTitulos text-2xl">Carrito de compras</h2>
        <div className="flex flex-row justify-around">
            <div>
                {cart.length === 0 ? (
                    <div>
                        <img src={carritoVacio} alt="" />
                    </div>
                ) : (
                    cart.map((product) => {
                        return (
                            <div>
                                <ShoppingCart key={product.id} product={product} />
                            </div>
                        )
                    })
                )}
            </div>
            <div className="flex flex-col justify-center items-center content-center justify-items-center font-letraH1 rounded-lg bg-celesteArgentina p-1 shadow-2xl border-solid border-4 border-white text-xl mt-8 m-2 font-semibold h-56 w-72">
                <h3 className="mb-3 underline decoration-2">Resumen del pedido</h3>
                <p>Total de productos: {quantity}</p>
                <h3>Monto total: ${totalPrice}</h3>
                <div className="mt-3">
                    <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid">Comprar</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartList