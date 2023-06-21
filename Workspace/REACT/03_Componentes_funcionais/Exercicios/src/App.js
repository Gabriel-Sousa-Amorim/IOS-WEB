import './App.css';
import Exemplo from './Components/Exemplo.jsx';
import Header from './Components/Header.jsx';

let Nome = prompt("Insirá seu nome")

function App() {
  return (
    <div className="App">
      <Header nome={Nome}/>
      <Exemplo />
    </div>
  );
}

export default App