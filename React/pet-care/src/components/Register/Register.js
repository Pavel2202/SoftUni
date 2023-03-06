import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section id="registerPage">
      <form className="registerForm">
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
