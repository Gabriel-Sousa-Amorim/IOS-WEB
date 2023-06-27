import React from 'react'

const valnotas = [10, 10, 10, 10]
var media = (valnotas[0] + valnotas[1] + valnotas[2] + valnotas[3])/valnotas.length

const Notas = () => {
  return (
    <div>
    <table border='collapse'>
        <thead>
            <tr>
                <td>Materia</td>
                <td>Notas</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Matéria 1</td>
                <td>{valnotas[0]}</td>
            </tr>
            <tr>
                <td>Matéria 2</td>
                <td>{valnotas[1]}</td>
            </tr>
            <tr>
                <td>Matéria 3</td>
                <td>{valnotas[2]}</td>
            </tr>
            <tr>
                <td>Matéria 4</td>
                <td>{valnotas[3]}</td>
            </tr>
        </tbody>
        <tfoot>
        <tr>
                <td>Média</td>
                <td>{media}</td>
            </tr>
        </tfoot>
    </table>
    </div>
  )
}

export default Notas