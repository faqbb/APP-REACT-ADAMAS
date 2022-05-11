import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemCount from './components/Cards/ItemCount';


function App() {
  const [count, setCount] = useState(0)
  const producto  = 'mancuerna'
  return (
    <div className="App">
      < Banner/>
      < NavBar/>
        <ItemListContainer productos= { producto }/>
        <ItemCount stock={5} initial={1}/>
        
      </div>
  )
}

export default App
