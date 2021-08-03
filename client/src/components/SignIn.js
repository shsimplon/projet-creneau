import React from "react";
import { userService } from "../services";
import Button from "../components/Button";
import Cookies from "universal-cookie";
import { withRouter } from "react-router";

const cookies = new Cookies();

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = async (e) => {
    const { email, password } = this.state;

    try {
      const response = await userService.login(email, password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.user.id_user);
      cookies.set("authcookie", response.data.token, { path: "/" });
      localStorage.setItem("role", response.data.user.role);
      if (response.data.user.role === "user") {
        this.props.history.push("/Booking");
      } else {
        this.props.history.push("/Admin");
      }
    } catch (e) {
      this.setState({ error: e.response });
    }
  };

  render() {
    return (
      <div className="signupForm">
        <>
          <span className="form-container">
            <h2>Se connecter</h2>
            {this.state.error && <h6>{this.state.error}</h6>}
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label for="password">Mot de passe</label>

            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button size="small" value="Login" handleClick={this.handleClick} />
          </span>
        </>
      </div>
    );
  }
}

export default withRouter(SignIn);
