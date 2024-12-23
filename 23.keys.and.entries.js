// ? keys  and values in js object
// const user = {
//   name: 'Rohan',
//   age: 25,
//   isMarried: true,
// };

// console.log(user);
// const userKeys = Object.keys(user);
// console.log(userKeys);

// const userValues = Object.values(user);
// console.log(userValues);

// ?entries in js array
// const nums = ['arun', 'minal', 'rajeev'];

// nums.forEach((item, index) => {
//   console.log([index, item]);
// });

// Expected output: Array [0, "a"]
// console.log(nums.length);

const laptop = {
  brand: 'MSI',
  ram: 16,
  ssd: 512,
};

const arr = Object.entries(laptop);

console.log(arr[0][1]);
