// Higher Order Function
// 1. Function returning function(closure)

// 2. Function passed as an argument from another function

// closure => function + lexical environment(surrounding state)
// ? also called function factory

// const calculateProduct = (num1) => {
//   const doMultiply = (num2) => {
//     return num1 * num2;
//   };

//   return doMultiply;
// };

// ? shortcut

// const calculateProduct = (num1) => (num2) => num1 * num2;

// const res = calculateProduct(10)(5);
// console.log(res);

// const getFullName = (firstName) => {
//   return (lastName) => {
//     let fullName = firstName + ' ' + lastName;

//     return fullName;
//   };
// };

// const func = getFullName('Rohan');
// func('Bhandari');
// const multiplyBy10 = calculateProduct(10);
// // const res = multiplyBy10(5);
// // console.log(res);

// const res2 = multiplyBy10(7);
// console.log(res2);

// const multiplyBy5 = calculateProduct(5);

// console.log(multiplyBy5(6));

// ? callback function
// ? function passed as an parameter/argument to another function

// const getSum = (num1, num2, printNumber) => {
//   const sum = num1 + num2;
//   printNumber(sum);
// };

// getSum(100, 20, (res) => {
//   console.log(res);
// });
