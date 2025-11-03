import "./Login.css";
import WithLogging from "../HOC/WithLogging.jsx";
import { Component } from "react";

// Login renders the login form with email and password inputs.
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  validateForm = (email, password) => {
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && password.length >= 8;
  };

  handleChangeEmail = (e) => {
    const email = e.target.value;
    this.setState((prev) => ({
      email,
      enableSubmit: this.validateForm(email, prev.password),
    }));
  };

  handleChangePassword = (e) => {
    const password = e.target.value;
    this.setState((prev) => ({
      password,
      enableSubmit: this.validateForm(prev.email, password),
    }));
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="inputEmail">Email:</label>
          <input
            type="email"
            id="inputEmail"
            value={email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="inputPassword">Password:</label>
          <input
            type="password"
            id="inputPassword"
            value={password}
            onChange={this.handleChangePassword}
          />

          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </div>
    );
  }
}

const LoginWithLogging = WithLogging(Login);

export default LoginWithLogging;
