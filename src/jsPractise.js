// find the product title
// find the array of products price and category

const products = [
  {
    id: 1,
    title: "MacBook Pro",
    category: "Laptops",
    price: 100000.0,
    description: "A high-performance laptop.",
    manufactureDate: "2023-05-15T08:30:00",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Nike",
    category: "Running Shoes",
    price: 5000,
    description: "Running shoes designed for speed and comfort.",
    manufactureDate: "2023-02-20T14:45:00",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Python",
    category: "Books",
    price: 500,
    description: "A language for AI",
    manufactureDate: "1925-04-10T10:10:00",
    isAvailable: false,
  },
  {
    id: 4,
    title: "Javascript",
    category: "Books",
    price: 700,
    description: "A language for Browser",
    manufactureDate: "1995-12-04T12:00:00",
    isAvailable: false,
  },
  {
    id: 5,
    title: "Dell XPS",
    category: "Laptops",
    price: 120000.0,
    description: "An ultra-slim laptop with powerful performance.",
    manufactureDate: "2023-04-25T09:15:00",
    isAvailable: true,
  },
];

let product_title = products.map((value, i) => {
  return value.title;
});

console.log(product_title);

let product_data = products.map((value, i) => {
  return `${value.title} costs Nrs ${value.price} and its category is ${value.category}`;
});

console.log(product_data);

let productGreaterThan2000 = products
  .filter((value, i) => {
    if (value.price >= 2000) return true;
  })
  .map((value, i) => {
    return `${value.title} costs Nrs ${value.price} and its category is ${value.category}`;
  });

console.log(productGreaterThan2000);

let productBooks = products
  .filter((value, i) => {
    if (value.category == "Books") return true;
  })
  .map((value, i) => {
    return `${value.title} costs Nrs ${value.price} and its category is ${value.category}`;
  });

console.log(productBooks);
