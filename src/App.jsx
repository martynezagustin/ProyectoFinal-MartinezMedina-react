import NavBar from './components/navbar/NavBar'
import "./style.css"
import CartContextProvider from './context/CartContext';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import ContactForm from './components/contactForm/ContactForm';


function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/products/:productId' element={<ItemDetailContainer />}/>  
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>  
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<ContactForm />}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
