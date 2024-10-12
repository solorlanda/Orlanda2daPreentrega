import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { CartContextProvider } from "./components/CartContext/CartContext";
import NavBarConBoots from "./components/NavBar/NavBarConBoots";

function App() {
  const cartContext = [];

  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
          {/* <NavBarConBoots/> */}
          <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Productos Argentinos"}/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer greetings={"Productos Argentinos"}/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailConteiner/>} />
          <Route path="/search/:idSearch" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<ShoppingCart/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App