import React, {Component} from 'react';

class Timer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentTime: new Date().toString()
    }
  }

  componentDidMount () {
    console.log('Timer mounted!');

    this.intervalId = setInterval(
      () => this.setState({currentTime: new Date().toString()}),
      1000
    );
  }

  compomentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    return (
      <div className="Timer">
      {
        this.state.currentTime
      }
      </div>
    )
  }
}

export default Timer;
