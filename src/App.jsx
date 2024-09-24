import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";

function App() {

  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Productos Argentinos"}/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer greetings={"Productos Argentinos"}/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailConteiner/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App