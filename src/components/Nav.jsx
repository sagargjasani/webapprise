import navlinks from "./navlinks.enum";
import { Link } from "react-router-dom";
import "./Nav.scss";
const Nav = () => {
  return (
    <nav>
      <ul className="navlinks">
        {navlinks.map(({ title, path }) => (
          <Link key={title} to={path} className="navlink">
            {title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
