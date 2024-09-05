
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { BsSearchHeart } from "react-icons/bs";

function NavBar() {
    return (
        <header className="sticky bg-amber-200 font-letraTitulos shadow-xl shadow-gray-500 h-32">
            <nav className="flex justify-around h-32">
                <div className="size-40 content-center h-32">
                    <img src={logo} alt="" />
                </div>
                <div className="flex grow justify-center items-center">
                    <input className="h-6 w-[60%] rounded-lg p-2 m-2" type="text" placeholder="Busque su producto aquí..."/>
                    <button>
                    <BsSearchHeart className="size-6"/>
                    </button>
                </div>
                <div className="content-center text-lg">
                    <ul className="flex justify-center items-center space-x-3">
                        <li>
                            <a className="font-letraTitulos" href="Inicio">Inicio</a>
                        </li>
                        <li>
                            <a href="Productos">Productos</a>
                        </li>
                        <li>
                            <a href="Contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="content-center p-6"> 
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar