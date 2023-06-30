import Header from './Components/Header.jsx';
import Tasks from './Components/Tasks.jsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Consulta médica',
      day: '5 de Fev as 14:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Reunião na Escola',
      day: '6 de Fev as 13:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Compras no Supermercado',
      day: '7 de Fev as 8:30',
      reminder: false,
    },
  ]);
    return (
      <div className="container">
        <Header title="tarefas" />
        <Tasks />
      </div>
    );
  }

  export default App; 