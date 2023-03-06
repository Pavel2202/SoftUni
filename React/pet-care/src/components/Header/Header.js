import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user } = useAuthContext();

  let guestNavigation = (
    <div id="guest">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </div>
  );

  let userNavigation = (
    <div id="user">
      <li>
        <Link to="/create">Create Postcard</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </div>
  );

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

          {user.email ? userNavigation : guestNavigation}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
