import React from 'react'
import HelloWorld from './HelloWorld'

function Greetings (props) {
  const {names = []} = props;

  return (
    <div className="Greetings">
      {
        names.map(name => (
          <HelloWorld name={name} isBye={name === "Patsy"} />
        ))
      }
    </div>
  )
}

export default Greetings;
