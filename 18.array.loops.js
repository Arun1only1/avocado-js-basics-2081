// ? array methods using loop
// ? forEach,map, filter, find,reduce
let collegeList = ['KEC', 'Himalayan', 'NCIT', 'ACHS'];

// collegeList.map((item, index, array) => {
//   console.log(item, index, array);
// });

// collegeList.forEach((item, index, array) => {
//   console.log(item);
// });

// collegeList.filter((item, index, array) => {
//   console.log(item);
// });

// collegeList.find((item, index, array) => {
//   console.log(item);
// });

// ? forEach => it does not change array
// ? it does not return anything(undefined)
// ? purely loop only

// let phones = ['Samsung', 'Apple', 'Xiomi', 'Oppo', 'Vivo'];

// phones.forEach((item, index, array) => {
//   console.log(item);
// });

// ? map
// ? it may/may not changes array
// ? returns new array
// ? original array length === returned array length

// let numList = [10, 20, 30, 40, 50];

// const newArray = numList.map((item, index, array) => {
//   let newItem = item + 5;
//   return newItem;
// });

// console.log(newArray);

// ? assignment
// let scores = [20, 35, 55];
// reduce 10 from each score and return new array

// const newScores = scores.map((item, index, array) => {
//   let newItem = item - 10;
//   return newItem;
// });

// ? shortcut
// const newScores = scores.map((item) => item - 10);

// console.log(newScores);

// map

// ?2. let prices = [10,15,30,2,5,90]
//?2. provide 20% flat discount on all chocolate Price

// let prices = [10, 15, 30, 2, 5, 90];

// const newPrices = prices.map((item, index, array) => {
//   let newPrice = item - (20 / 100) * item;

//   return newPrice;
// });

// console.log(newPrices);

// ? one liner
// const newPrices = prices.map((item) => item - (20 / 100) * item);

// console.log(newPrices);

// let marks = [25, 35, 30, 29, 55, 65];
// pass marks being 32
//  give grace marks of 5 to student who could not pass

// const newMarks = marks.map((mark, index, array) => {
//   if (mark < 32) {
//     let newMark = mark + 5;
//     return newMark;
//   }

//   return mark;
// });

// console.log(newMarks);

//? one liner

// const newMarks = marks.map((mark) => (mark < 32 ? mark + 5 : mark));

// console.log(newMarks);

const productList = [
  {
    name: 'Shoes',
    price: 5500,
  },
  {
    name: 'Jacket',
    price: 15000,
  },
  {
    name: 'cap',
    price: 1500,
  },
  {
    name: 'Goggles',
    price: 6000,
  },
  {
    name: 'Trousers',
    price: 5000,
  },
];

//   ? increase price of each product by 1000 due to recent tax increase

// const newProductList = productList.map((item, index, array) => {
//   let newPrice = item.price + 1000;

//   let newItem = { ...item, price: newPrice };

//   return newItem;
// });

// console.log(newProductList);

// ? one liner
// const newProductList = productList.map((item) => ({
//   ...item,
//   price: item.price + 1000,
// }));

// console.log(newProductList);
// console.log(productList);

// ? simple way
// const newProductList = productList.map((item, index, array) => {
//   item.price = item.price + 1productList

// ? decrease price of items having price greater than 10k by 2k
// const newProductList = productList.map((item, index, array) => {
//   if (item.price > 10000) {
//     item.price = item.price - 2000;

//     return item;
//   } else {
//     return item;
//   }
// });

// const newProductList = productList.map((item, index, array) => {
//   if (item.price > 10000) {
//     return { ...item, price: item.price - 2000 };
//   }

//   return item;
// });

// console.log(newProductList);

//   ? increase price of each product by 1000 due to recent tax increase
// ? if increased price crosses 10k, decrease it by 2k

// const newProductList = productList.map((item, index, array) => {
//   let newPrice = item.price;

//   if (item.price < 10000) {
//     newPrice = item.price + 1000;
//   }

//   if (newPrice > 10000) {
//     newPrice = newPrice - 2000;
//   }

//   return { ...item, price: newPrice };
// });

// console.log(newProductList);

// ? increase price of "cap"  by 500

// const newProductList = productList.map((item, index, array) => {
//   if (item.name === 'cap') {
//     item.price = item.price + 500;
//   }

//   return item;
// });

// console.log(newProductList);
