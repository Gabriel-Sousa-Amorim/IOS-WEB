import React from 'react'
import PropTypes from 'prop-types'

const BoasVindas = props => {
  return (
    <section style={{borderBlock: "2px solid #000"}}>
        <h1>Bem Vindo</h1>
        <p>Seja Bem vindo {props.nome}</p>
    </section>
  )
}

BoasVindas.propTypes = {}

export default BoasVindas