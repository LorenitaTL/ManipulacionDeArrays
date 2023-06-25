const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log("🚀 ~ file: 03-map-reloaded.js:23 ~ orders:", orders);

const totales = orders.map((order) => order.total);
console.log("🚀 ~ file: 03-map-reloaded.js:26 ~ totales:", totales);

// Siguiente ejemplo muta el objetooriginal

// const totales2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("🚀 ~ file: 03-map-reloaded.js:34 ~ totales2 ~ totales2:", totales2);

// console.log("🚀 ~ file: 03-map-reloaded.js:35 ~ orders:", orders);

// Siguienete ejemplo no muta el objeto original

const totales3 = orders.map((item) => {
  return {
    ...item,
    taxt: 0.19,
  };
});
console.log("🚀 ~ file: 03-map-reloaded.js:46 ~ totales3 ~ totales3:", totales3);

console.log("🚀 ~ file: 03-map-reloaded.js:48 ~ orders:", orders);
