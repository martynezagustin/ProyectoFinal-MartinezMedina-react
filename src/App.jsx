import NavBar from './components/navbar/NavBar'
import "./style.css"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home/home';
import ProductDetail from './pages/product-detail/product-detail';


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products/:productId' element={<ProductDetail />}/>  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
