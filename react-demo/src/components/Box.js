import React from 'react';
import Square from './Square'

function Box (props) {

  const style = {
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: `${3 * (100 + 50)}px`,
    height: "150px"
  }

  return (
    <div style={style} className="Box">
      <Square />
      <Square />
      <Square />
    </div>
  )
}

export default Box
