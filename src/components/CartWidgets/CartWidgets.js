import { useContext } from "react";
import carrito from "./assets/carrito.svg";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidgets = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
      <img className="carrito" src={carrito} alt="cart-widgets" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidgets;
