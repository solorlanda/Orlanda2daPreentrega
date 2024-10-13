import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import SearchBar from "../SearchBar/SearchBar";
import { useContext } from "react";
import CartContext from "../CartContext/CartContext";

const NavBar = () => {
    const [cart, setCart] = useContext(CartContext);
    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <header className="sticky bg-amber-200 font-letraTitulos shadow-xl shadow-gray-500 h-32">
            <nav className="flex justify-around h-32">
                <div className="size-40 content-center h-32">
                    <Link to={"/"}><img className="hover:border-solid hover:border-4 hover:border-black hover:rounded-lg" src={logo} alt="" /></Link>
                </div>
                <div className="content-center text-lg flex grow flex-col justify-center items-center">
                    <ul className="flex justify-center items-center space-x-3">
                        <Link className="hover:underline hover:decoration-solid" to={"/category/mates"}>Mates</Link>
                        <Link className="hover:underline hover:decoration-solid" to={"/category/alfajores"}>Alfajores</Link>
                        <Link className="hover:underline hover:decoration-solid" to={"/category/yerba"}>Yerba</Link>
                        <Link className="hover:underline hover:decoration-solid" to={"/category/dulce-de-leche"}>Dulce de Leche</Link>
                    </ul>
                    <SearchBar/>
                </div>
                <Link className="content-center p-6" to={"/cart"}> 
                    <CartWidget/>
                </Link>
            </nav>
        </header>
    );
};

export default NavBar