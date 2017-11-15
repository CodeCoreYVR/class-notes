import React from 'react';

function HelloWorld (props) {
  const {
    isBye = false
  } = props

  const salutation = isBye ? <em>Bye</em> : <strong>Hello</strong>

  return (
    <p>{salutation}, {props.name || "World"}!</p>  
  )
}

export default HelloWorld;
