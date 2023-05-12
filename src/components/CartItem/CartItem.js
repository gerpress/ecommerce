import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ id, title, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="CartItem">
      <div className="CartItem-info">
        <h3>
          <Link to={`/item/${id}`}>{title}</Link>
        </h3>
        <p>Precio unitario: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio total: ${price * quantity}</p>
      </div>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
