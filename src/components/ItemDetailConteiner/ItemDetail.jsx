import { BsCart4 } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {
    return(
        <div className="flex flex-col justify-center items-center content-center justify-items-center font-letraH1 rounded-lg bg-celesteArgentina p-1 shadow-2xl border-solid border-4 border-white hover:border-dotted text-xl mt-8 m-2 font-semibold w-1/2">
            <h1 className="items-center">{product.nombre}</h1>
            <img className="items-center w-96" src={product.imagen} alt={product.nombre} />
            <div className="space-x-4">
            <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid mt-2 gap-2">      <BsCart4 size="30px" /></button>
            <Link to={"/"}>
            <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid mt-2">      <IoHome size="30px"/></button> 
            </Link>
            </div>
            <p className="items-center mt-3">${product.precio}</p>
            <p className="items-center">{product.descripcion}</p>
            <p>{product.stock} unidades disponibles.</p>
            
        </div>
    )
}
export default ItemDetail