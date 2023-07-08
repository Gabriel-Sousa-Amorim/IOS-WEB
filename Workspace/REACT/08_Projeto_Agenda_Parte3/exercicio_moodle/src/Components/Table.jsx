import React from 'react'

const Table = () => {
  return (
    <div>
      <table className='d-none'>

        <thead>
          <tr>
            <td colSpan="3">Veja a interpretação do IMC</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>IMC</td>
            <td>Classificação</td>
            <td style={{ background: '#00f', color: '#fff' }}>Obesidade <small>(grau)</small></td>
          </tr>

          <tr>
            <td>Menor que 18,5</td>
            <td>Magreza</td>
            <td style={{ background: '#00f', color: '#fff' }}>0</td>
          </tr>

          <tr>
            <td>Entre 18,5 e 24,9</td>
            <td>Normal</td>
            <td style={{ background: '#00f', color: '#fff' }}>0</td>
          </tr>

          <tr>
            <td>Entre 25,0 e 29,9</td>
            <td>Sobrepeso</td>
            <td style={{ background: '#00f', color: '#fff' }}>I</td>
          </tr>

          <tr>
            <td>Entre 30,0 e 39,9</td>
            <td>Obesidade</td>
            <td style={{ background: '#00f', color: '#fff' }}>II</td>
          </tr>

          <tr>
            <td>Maior que 40,0</td>
            <td>Obesidade Grave</td>
            <td style={{ background: '#00f', color: '#fff' }}>III</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
