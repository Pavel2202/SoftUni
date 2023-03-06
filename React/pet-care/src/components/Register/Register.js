import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Register = () => {
  const { register } = useAuthContext();
  const navigate = useNavigate();

  const onRegisterHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");
    let repeatPassword = formData.get("repeatPassword");

    if (password != repeatPassword) {
      console.error("Passwords don't match.");
      return;
    }

    authService
      .register(email, password)
      .then((authData) => {
        register(authData);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="registerPage">
      <form className="registerForm" onSubmit={onRegisterHandler} method="POST">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div className="on-dark">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="steven@abv.bg"
          />
        </div>

        <div className="on-dark">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
          />
        </div>

        <div className="on-dark">
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            placeholder="********"
          />
        </div>

        <button className="btn" type="submit">
          Register
        </button>

        <p className="field">
          <span>
            If you have profile click <Link to="/login">here</Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Register;
