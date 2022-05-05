import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/Cards/ItemCount';


function App() {
  const [count, setCount] = useState(0)
  const producto  = 'mancuerna'
  return (
    <div className="App">
      < Banner/>
      < NavBar/>
      <header className="App-header">
        <ItemListContainer productos= { producto }/>
        <ItemCount stock={5} initial={1}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
