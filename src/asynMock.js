const products = [
  {
    id: "1",
    nombre: "WHEY PROTEIN TRUE MADE X 2.05 LB",
    img: "https://static.wixstatic.com/media/451acc_6fdf849c5c94403492048d2b7d866090~mv2.jpg/v1/fill/w_440,h_440,al_c,q_85,usm_0.66_1.00_0.01/451acc_6fdf849c5c94403492048d2b7d866090~mv2.webp",
    price: 6912,
    stock: 4,
    descripcion: "BLEND DE MÁXIMA PUREZA. RÁPIDA ABSORCIÓN Y MÁXIMA CALIDAD.",
  },
  { id: "2", nombre: "PRE WAR (Con Cafeína)", img: "https://static.wixstatic.com/media/451acc_955828fd4a0746729c0649c99b445a9c~mv2.png/v1/fill/w_440,h_440,al_c,q_90,usm_0.66_1.00_0.01/451acc_955828fd4a0746729c0649c99b445a9c~mv2.webp", price: 4200, stock: 5, descripcion: "PRE WORK MÁS COMPLETO.ENERGÍA + CONCENTRACIÓN + RESISTENCIA" },
  { id: "3", nombre: "CREATINA MICRONIZADA x 300 grs", img: "https://static.wixstatic.com/media/451acc_c58f6afa9dd24144b4f0fc44f02c0912~mv2.jpg/v1/fill/w_440,h_440,al_c,q_85,usm_0.66_1.00_0.01/451acc_c58f6afa9dd24144b4f0fc44f02c0912~mv2.webp", price: 8175, stock: 5, descripcion: "MEJORA LA POTENCIA MUSCULAR. RETRASA LA FATIGA MUSCULAR." },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
