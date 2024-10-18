import React from 'react';

const CartOrder = ({ orderDetails }) => {
    return (
        <div >
            <h2 className='text-center font-letraTitulos m-5 text-2xl underline underline-offset-1'>Detalles de la Orden</h2>
            <p className='text-center font-letraTitulos m-1 text-lg'>Nombre: {orderDetails.nombre}</p>
            <p className='text-center font-letraTitulos m-1 text-lg'>Apellido: {orderDetails.apellido}</p>
            <h3 className='text-center font-letraTitulos m-1 text-lg'>Productos Comprados:</h3>
            <ul>
                {orderDetails.products.map((product) => (
                    <li key={product.id} className='text-center font-letraTitulos m-1 text-lg'>
                        {product.nombre} - Cantidad: {product.quantity} - Precio: ${product.precio}
                    </li>
                ))}
            </ul>
            <h4 className='text-center font-letraTitulos m-1 text-lg'>Total de productos: {orderDetails.totalQuantity}</h4>
            <h4 className='text-center font-letraTitulos m-1 text-lg'>Total a Pagar: ${orderDetails.totalPrice}</h4>
            <p className='text-center font-letraTitulos m-1 text-2xl'>Fecha de compra: {orderDetails.date}</p>
        </div>
    );
};

export default CartOrder;