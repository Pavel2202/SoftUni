const Login = () => {
  return (
    <section id="loginPage">
      <form className="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="steven@abv.bg"
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
          />
        </div>

        <button className="btn" type="submit">
          Login
        </button>

        <p className="field">
          <span>
            If you don't have profile click <a href="/register">here</a>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
