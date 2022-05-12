import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/Products/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const producto  = 'mancuerna'
  return (
    <BrowserRouter >
    <div className="App bg-dark">
      < Banner/>
      < NavBar/>
      <Routes>  
        <Route path='/itemlist' element= { <ItemListContainer  /> } />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
