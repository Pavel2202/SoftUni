import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .login(email, password)
      .then((authData) => {
        login(authData);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="login">
      <div className="form">
        <h2>Login</h2>
        <form className="login-form" method="POST" onSubmit={onLoginHandler}>
          <input type="text" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">login</button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
