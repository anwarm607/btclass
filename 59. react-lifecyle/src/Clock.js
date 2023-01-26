
import "./App.css";
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props)
    console.log("Called Constructor")
    this.state = {
        currentTime: new Date().toLocaleTimeString(),
        show: false
    }
  }
  componentDidMount() {
    console.log("Called componentDidMount");
    this.timer = setInterval(() => {
        this.tick()
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Called componentDidUpdate", prevState)
    if (this.state.currentTime !== prevState.currentTime) {
        if (this.state.currentTime === '20:21:40') {
            this.setState({
                show: true
            })
        }
    }
  }

  componentWillUnmount() {
    console.log("Called componentWillUnmount")
    clearInterval(this.timer)
  }

  tick() {
    console.log("I am called")
    this.setState({
        currentTime: new Date().toLocaleTimeString()
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.currentTime}</h1>
        {
            this.state.show ? <p>Your Time reached {this.state.currentTime}</p> : null
        }
      </div>
    );
  }
}

export default Clock;
