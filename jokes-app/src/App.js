//external imports
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

//internal imports
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <nav>
          <NavLink to="/">Home</NavLink>&nbsp;|&nbsp;
          <NavLink to="/signup">Signup</NavLink>&nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
        </nav>
        <h1>Dad's got jokes...</h1>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

function Home(props) {
  return <h1>Home Component</h1>;
}

export default App;
