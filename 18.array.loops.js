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

// ? decrease price of items having price greater than 10k by 2k
