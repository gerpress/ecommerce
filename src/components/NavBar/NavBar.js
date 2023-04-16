import CartWidgets from "../CartWidgets/CartWidgets";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="containerNav">
      <nav className="NavBar">
        <Link to="/">
          <h3>AvtiveSports</h3>
        </Link>
        <div>
          <NavLink to={"/sobre Nosotros"} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")} />
        </div>
        <CartWidgets />
      </nav>
    </div>
  );
};

export default NavBar;
