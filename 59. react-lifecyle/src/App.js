import "./App.css";
import React from "react";
import Clock from "./Clock";
import LoginControl from "./login";
import ListsAndKeys from "./ListAndKeys";
import { Border } from "./Border";

const Extra = () => {
  return <p>Exrta</p>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  changeCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {/* Life cycle rendering Example */}
        {/* <Clock /> */}
        {/* Conditional rendering Example */}
        {/* <LoginControl /> */}
        {/* List and Keys Example */}
        <Border>
          <ListsAndKeys />
        </Border>

        {/* Children Props and Components in Props */}
        <Border
          extra={<Extra />}
          count={this.state.count}
          changeCount={() => this.changeCount()}
        >
          <h1>Example Children props</h1>
        </Border>
      </div>
    );
  }
}

export default App;
