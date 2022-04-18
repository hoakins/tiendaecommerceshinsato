import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/counter/ItemCounter';

function App() {
  

  return (
    <div className="App">
      <ItemListContainer greeting='Hola coders'/>
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>hola soy Hoakin</h1> */}
        <Counter />
        <buton>últimas 8 unidades disponibles</buton>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
    </div>
  );
}
export default App;