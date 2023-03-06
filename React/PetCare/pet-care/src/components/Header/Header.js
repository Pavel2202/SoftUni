import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <section className="logo">
          <img src="./images/logo.png" alt="logo" />
        </section>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/create">Create Postcard</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
