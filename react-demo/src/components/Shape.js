import React from 'react';

function Shape (props) {
  const {
    color = "blue",
    type = "square"
  } = props;

  const style = {
    height: "100px",
    width: "100px",
    borderRadius: type === "circle" ? "9999999px" : "0px",
    backgroundColor: color,
    transform: type === "diamond" ? "rotateZ(45deg) scale(0.7)" : ""
  }

  return (
    <div className="Shape" style={style} />
  )
}

export default Shape;
