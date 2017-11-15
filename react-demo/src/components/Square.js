import React from 'react';

function Square (props) {
  const style = {
    height: "100px",
    width: "100px",
    backgroundColor: props.color || "blue"
  }

  return (
    <div className="square" style={style} />
  )
}

export default Square;
