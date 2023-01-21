import React from "react";
import "./counter.css";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <div className="counter">
          <button onClick={() => this.increment()}>+</button>
          <p>{this.state.count}</p>
          <button onClick={() => this.decrease()}>-</button>
        </div>
        {this.state.count > 6 ? (
          <p>Hoorray!!! You have achieved 6 count of push up. Keep going</p>
        ) : null}
      </div>
    );
  }
}
