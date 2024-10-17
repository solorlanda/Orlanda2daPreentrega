import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { CartContextProvider } from "./components/CartContext/CartContext";
import CartList from "./components/ShoppingCart/CartList";
import NotFound from "./components/NotFound";


const App= () => {

  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Productos Argentinos"}/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer greetings={"Productos Argentinos"}/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailConteiner/>} />
          <Route path="/search/:idSearch" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<CartList/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App