import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user } = useAuthContext();

  let guestNavigation = (
    <div className="guest">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );

  let userNavigation = (
    <div className="user">
      <Link to="/create">Add Album</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );

  return (
    <header>
      <Link id="logo" to="/">
        <img id="logo-img" src="./images/logo.png" alt="" />
      </Link>

      <nav>
        <div>
          <Link to="/dashboard">Dashboard</Link>
          {user.email ? userNavigation : guestNavigation}
        </div>
      </nav>
    </header>
  );
};

export default Header;
