import CartWidgets from "../CartWidgets/CartWidgets";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="containerNav">
      <nav className="NavBar">
        <Link to="/">
          <h3>AvtiveSports</h3>
        </Link>
        <div className="NavLink">
          <NavLink to={"/category/proteinas"} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
            Proteinas
          </NavLink>
          <NavLink to={"/category/creatinas"} className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
            Creatinas
          </NavLink>
          <CartWidgets />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
