
import './App.css';
import Nome from './Components/Nome.jsx'
import Nota from './Components/Notas.jsx'

function App() {
  return (
    <div className="App">
      <Nome aluno="Gabriel"/>
      <Nota/>
    </div>
  );
}

export default App;
