import NavBar from './components/navbar/NavBar'
import "./style.css"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar onFilter/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/products/:productId' element={<ItemDetailContainer />}/>  
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
