const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
// console.log(sum);

const products = [
  { id: 1, name: "lenevo", price: 30000 },
  { id: 2, name: "hp", price: 40000 },
  { id: 3, name: "del", price: 56000 },
  { id: 4, name: "mac", price: 130000 },
];

// map
const names = products.map((product) => product.name);
// console.log(names)

const prices = products.map((product) => product.price);
// console.log(prices)

// forEach
// products.forEach(p=>console.log(p.id))

// filter
const expensive = products.filter((product) => product.price > 50000);
// console.log(expensive)

// find
const affordable = products.find((product) => product.price < 50000);
// console.log(affordable)

// reduce
const totalPrice = products.reduce((prev, current) => prev + current.price, 0);
// console.log(totalPrice)
