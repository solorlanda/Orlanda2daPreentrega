import { Link } from "react-router-dom";

const Item = ({product}) => {
    return(
        <div className="flex" key={product.id}>
            <div className="flex flex-col justify-center items-center content-center justify-items-center font-letraH1 rounded-lg w-96 bg-celesteArgentina p-1 shadow-2xl border-solid border-4 border-white hover:border-dotted text-xl">
                <h2 className="p-2">{product.nombre}</h2>
                <p className="p-2">${product.precio}</p>
                <Link to={`/detail/${product.id}`}><button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid">Ver Detalles</button></Link>
                <button className="bg-amber-200 rounded-lg p-2 shadow-2xl border-2 border-amber-200 hover:border-solid hover:border-2 hover:border-yellow-500 hover:bg-white hover:underline hover:decoration-solid mt-2">Comprar</button>
                <img className="w-48 p-2" src={product.imagen} alt={product.nombre} />
            </div>
        </div>
    );
};
export default Item;