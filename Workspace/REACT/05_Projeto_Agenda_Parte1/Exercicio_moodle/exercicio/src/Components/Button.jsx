import React from 'react'
import PropTypes from 'prop-types'
function addElmt() {
  let newElmt = document.createElement('p');
  newElmt.textContent = "novo"
  document.body.appendChild(newElmt)
}


const Button = props => {
  return (
    <button onClick={addElmt}>
      Clique me
    </button>
  )
}

Button.propTypes = {}

export default Button