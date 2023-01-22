import "./App.css";
import React from "react";
import Profile from './Profile';
import { Counter } from './Counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h2>There</h2>
        {/* <Profile name="Mohamed Anwar" age={27} phoneNumber="+919500948255" />
        <Profile name="Arasu" age={24} />
        <Profile name="Makesh" age={32} />
        <Profile name="Barani" age={23} /> */}
        <Counter />
      </div>
    );
  }
}

export default App;
