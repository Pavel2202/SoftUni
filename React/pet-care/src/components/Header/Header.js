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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/create">Create Postcard</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
