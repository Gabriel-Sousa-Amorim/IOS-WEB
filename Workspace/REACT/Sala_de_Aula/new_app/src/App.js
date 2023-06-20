import logo from './logo.svg';
import './App.css';

function App() {
  const data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();
  console.log(hora)
  console.log(minutos)
  console.log(segundos)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Me Chamo Gabriel Sousa</h1>
      </header>
      <nav className='App-nav'>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <main className='App-main'>
        <span>
        </span>
      </main>
    </div>
  );
}

export default App;
