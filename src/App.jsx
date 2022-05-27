
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/Products/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter >
      < CartContextProvider>
          <div className="App bg-dark overflow-hidden">
            < Banner/>
              < NavBar/>
              <Routes>  
                <Route path='/category/fpyy' element= { <ItemListContainer category={'fpyy'} /> } />
                <Route path='/category/mm' element= { <ItemListContainer category={'mm'} /> } />
                <Route path='/category/pdb' element= { <ItemListContainer category={'pdb'} /> } />
                <Route path='/category/pyr' element= { <ItemListContainer category={'pyr'} /> } />
                <Route path='/category/mc' element= { <ItemListContainer category={'mc'} /> } />
                <Route path='/fpyy/:detailId' element = {<ItemDetailContainer />} />
                <Route path='/cart' element = {<Cart />} />
              </Routes>
            < Footer/>
          </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
