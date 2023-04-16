import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="grid-container ">
      <div className="LisGroup row ">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
