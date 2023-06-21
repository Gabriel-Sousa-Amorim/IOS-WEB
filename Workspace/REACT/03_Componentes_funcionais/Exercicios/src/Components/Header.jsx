import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
    <div style={{color:"red"}}>Seja, Bem vindo {props.nome}</div>
    )
}

Header.defaultProps = {
    nome: 'Nome padrão',
};

Header.propTypes = {
    nome: PropTypes.string,
}

export default Header; 