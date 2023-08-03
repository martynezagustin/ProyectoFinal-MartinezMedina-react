import NavBar from './components/navbar/NavBar'
import "./style.css"
import CartContextProvider from './context/CartContext';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';


function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar onFilter/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/products/:productId' element={<ItemDetailContainer />}/>  
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>  
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
