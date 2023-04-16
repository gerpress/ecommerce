const Item = ({ id, nombre, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <picture>
        <img src={img} alt={nombre} className="ItemImg"></img>
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <link to={`/item/${id}`} className="Option">
          Ver Detalle
        </link>
      </footer>
    </article>
  );
};

export default Item;
