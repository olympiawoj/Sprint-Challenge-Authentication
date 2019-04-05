import React from "react";
import axios from "axios";

class Signup extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSignup = e => {
    e.preventDefault();
    const endpoint = "http://localhost:3300/api/register";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("LOGIN RESPONSE", res);
        // localStorage.setItem("token", res.data.token);
      })
      .catch(error => console.log("LOGIN ERROR", error));
  };

  render() {
    return (
      <div className="signup-form">
        <form className="form" onSubmit={this.handleSignup}>
          <label htmlFor="username">Account</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button type="submit">SignUp</button>
        </form>
      </div>
    );
  }
}

export default Signup;
