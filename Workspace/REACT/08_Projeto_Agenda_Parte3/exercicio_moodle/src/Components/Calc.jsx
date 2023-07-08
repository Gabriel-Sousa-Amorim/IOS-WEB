
import React from 'react';
import Table from './Table.jsx';
import '../App.css';

function Calculo() {
      var height = document.getElementById('height')
      var weight = document.getElementById('weight')
      var IMC = document.getElementById('IMCValue')
      if (parseInt(height.value) > 0 && parseInt(weight.value) > 0) {
        IMC.innerHTML = " "+(parseInt(weight.value) * 100) / ((parseInt(height.value) / 10) ** 2);
        document.querySelector('.d-none').classList.remove('d-none')
      } else {
        height.value = "";
        weight.value = "";
        alert("ERRO");
      }}
      function Limpa() {
        var height = document.getElementById('height')
        var weight = document.getElementById('weight')
        var IMC = document.getElementById('IMCValue')
        height.value = "";
        weight.value = "";
        IMC.innerHTML = "..."
    }

    const Calc = props => {
        return (
            <div>
              <h1>Calculo IMC</h1>
              <input  placeholder='Metragem'  type="text" id='height' />
                <label htmlFor="height">Mt's</label>
                <br />
                <input placeholder='Kilogramagem' id='weight'  type="number"/>
                <label htmlFor="weight">Kg's</label>
                <br />
                <p>
                    Seu IMC é
                    <span id='IMCValue'>...</span>
                </p>
                <br />
                <button onClick={Calculo}>Calcular</button>
                <button onClick={Limpa}>Limpar</button>
                <Table/>
            </div>
        )
    }

    Calc.propTypes = {}

    export default Calc

