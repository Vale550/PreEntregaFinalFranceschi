import './App.css'
import Cart from './Components/Cart/Cart';
import ItemDetails from './Components/ItemDetails';
import ItemListcontainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
//import Contador from './contador/contador'
import imagenes from './Imagenes/imagenes'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from './context/CartContex';
import Checkout from './Components/checkout';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          
          <Route extract path="/" element={ <div className='Item_div_css'> <ItemListcontainer categoria="nuevos" /></div>}/>

          <Route extract path=":categoryid" element={ <div className='Item_div_css'> <ItemListcontainer /></div>}/>

          
          <Route extract path="/Item/:itemid" element={ <ItemDetails />}/>

          <Route extract path="/cart" element={ <Cart />}/>

          <Route extract path="/Checkout" element={ <Checkout/> }/>


        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}
export default App