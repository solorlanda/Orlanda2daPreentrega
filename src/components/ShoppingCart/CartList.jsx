import { useContext, useState } from "react";
import CartContext from "../CartContext/CartContext";
import ShoppingCart from "./ShoppingCart";
import carritoVacio from "../../assets/carritoVacio.png";
import DeleteCart from "./DeleteCart";
import CartOrder from "./CartOrder";

function CartList() {
    const [cart, setCart] = useContext(CartContext);
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        confirmEmail: "",
        telefono: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [orderDetails, setOrderDetails] = useState(null); 

    const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.quantity * curr.precio, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.nombre) errors.nombre = "El nombre es requerido";
        if (!formData.apellido) errors.apellido = "El apellido es requerido";
        if (!formData.email) errors.email = "El email es requerido";
        if (formData.email !== formData.confirmEmail) errors.confirmEmail = "Los correos no coinciden";
        if (!formData.telefono) errors.telefono = "El teléfono es requerido";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            const orderInfo = {
                nombre: formData.nombre,
                apellido: formData.apellido,
                products: cart.map(product => ({
                    id: product.id,
                    nombre: product.nombre,
                    quantity: product.quantity,
                    precio: product.precio,
                })),
                totalQuantity: quantity,
                totalPrice: totalPrice,
                date: new Date().toLocaleString(),
            };

            setOrderDetails(orderInfo);

            setCart([]); 

            setFormData({
                nombre: "",
                apellido: "",
                email: "",
                confirmEmail: "",
                telefono: "",
            });
        }
    };

    if (orderDetails) {
        return <CartOrder orderDetails={orderDetails} />;
    }

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
                        cart.map((product) => (
                            <div key={product.id}>
                                <ShoppingCart product={product} />
                            </div>
                        ))
                    )}
                </div>
                <div className="flex flex-col justify-center items-center content-center justify-items-center font-letraH1 rounded-lg bg-celesteArgentina p-1 shadow-2xl border-solid border-4 border-white text-xl mt-8 m-2 font-semibold h-auto w-72">
                    <h3 className="mb-3 underline decoration-2">Resumen del pedido</h3>
                    <p>Total de productos: {quantity}</p>
                    <h3>Monto total: ${totalPrice}</h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="p-1 border border-gray-300 rounded"
                        />
                        {formErrors.nombre && <span className="text-red-500">{formErrors.nombre}</span>}

                        <input
                            type="text"
                            name="apellido"
                            placeholder="Apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            className="p-1 border border-gray-300 rounded"
                        />
                        {formErrors.apellido && <span className="text-red-500">{formErrors.apellido}</span>}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-1 border border-gray-300 rounded"
                        />
                        {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}

                        <input
                            type="email"
                            name="confirmEmail"
                            placeholder="Confirmar Email"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                            className="p-1 border border-gray-300 rounded"
                        />
                        {formErrors.confirmEmail && <span className="text-red-500">{formErrors.confirmEmail}</span>}

                        <input
                            type="text"
                            name="telefono"
                            placeholder="Teléfono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="p-1 border border-gray-300 rounded"
                        />
                        {formErrors.telefono && <span className="text-red-500">{formErrors.telefono}</span>}

                        <button
                            type="submit"
                            className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid mt-4"
                        >
                            Comprar
                        </button>
                    </form>

                    <DeleteCart />
                </div>
            </div>
        </>
    );
}

export default CartList;