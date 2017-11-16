import React, {Component} from 'react';

const COLORS = [
  'magenta',
  'yellow',
  'cyan'
];

class Shape extends Component {
  constructor (props) {
    super(props);

    this.state = {
      colorIndex: 0
    }

    this.colorCycle = this.colorCycle.bind(this);
    // this.colorCycle = (...args) => this.colorCycle(...args)
  }

  colorCycle (event) {
    const {
      colorIndex
    } = this.state;

    const {
      colors = COLORS
    } = this.props;

    this.setState({colorIndex: (colorIndex + 1) % colors.length})
  }

  render () {
    const {
      colorIndex
    } = this.state;

    const {
      colors = COLORS,
      color = "blue",
      type = "square"
    } = this.props;

    const style = {
      height: "100px",
      width: "100px",
      borderRadius: type === "circle" ? "9999999px" : "0px",
      backgroundColor: colors[colorIndex],
      transform: type === "diamond" ? "rotateZ(45deg) scale(0.7)" : ""
    }

    return (
      <div
        onClick={this.colorCycle}
        className="Shape"
        style={style}
      />
    )
  }
}

export default Shape;
