import React, { Component } from "react";
import "./App.css";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <h1>Dad's got jokes...</h1>
        <Signup />
      </div>
    );
  }
}

export default App;
