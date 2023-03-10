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
    let rePassword = formData.get("re-password");

    if (password != rePassword) {
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
    <section id="register">
      <div className="form">
        <h2>Register</h2>
        <form className="login-form" method="POST" onSubmit={onRegisterHandler}>
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
          />
          <input
            type="password"
            name="re-password"
            id="repeat-password"
            placeholder="repeat password"
          />
          <button type="submit">register</button>
          <p className="message">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
