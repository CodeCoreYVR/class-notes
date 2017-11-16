//                 👇 is the export of a variable named `Component` of the `react` package
import React, {Component} from 'react';
//      👆 is the default export by the `react` package

/*
function HelloWorld (props) {
  const {
    isBye = false
  } = props

  const salutation = isBye ? <em>Bye</em> : <strong>Hello</strong>

  return (
    <p>{salutation}, {props.name || "World"}!</p>
  )
}
*/

class HelloWorld extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isHovered: false
    }
  }

  render () {
    const {
      isBye = false,
      name
    } = this.props

    let salutation = (this.state.isHovered ? !isBye : isBye)
      ? <em>Bye</em>
      : <strong>Hello</strong>

    return (
      <p
        onMouseEnter={() => this.setState({isHovered: true})}
        onMouseLeave={() => this.setState({isHovered: false})}
      >{salutation}, {name || "World"}!</p>
    )
  }
}

export default HelloWorld;












// bump
