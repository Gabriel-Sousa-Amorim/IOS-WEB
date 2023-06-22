import { Component } from 'react';

class Exemplo extends Component {
  // Declare uma nova variável de estado, a qual chamaremos de "contador"   
  // e é um campo do objeto state   
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Você clicou {this.state.contador} vezes</p>
        <button
          onClick={() =>
            this.setState({ contador: this.state.contador + 1 })
          }
        >
          Clique aqui
        </button>
      </div>
    );
  }
}

export default Exemplo; 