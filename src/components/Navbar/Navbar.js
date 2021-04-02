import { Link } from "react-router-dom";

const Navbar = ({ removeToken }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/" exact="true">
            Take me Home
          </Link>{" "}
        </li>

        <li>
          <Link className="link" to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link className="link" to="/preferences">
            Preferences
          </Link>
        </li>

        <button onClick={removeToken}> Logout </button>
      </ul>
    </nav>
  );
};

export default Navbar;
