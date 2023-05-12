import { useEffect, useState } from "react";
import { getDocs, collection, query, where, doc } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/config";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryid } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryid ? query(collection(db, "products"), where("category", "==", categoryid)) : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} category={categoryid} />
    </div>
  );
};

export default ItemListContainer;
