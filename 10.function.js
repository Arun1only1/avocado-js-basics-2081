// function
// ?DRY => Do not Repeat Yourself
// ? objective => code reusability, single point of control, maintainable code

// console.log('Hello');
// some code here
// some code here
// some code here
// some code here
// some code here
// some code here
// some code here
// some code here
// some code here

// console.log('Hello');

// ? syntax
// function function_name (){
// some code here
// }

// function greetUser(userName) {
//   console.log('hello' + ' ' + userName);
// }

// greetUser('Rohan');
// greetUser('Ramesh');
// greetUser('Umesh');

// ? arrow function
// ES6

// syntax
// const functionName =()=>{ }

// const addNumbers = (num1, num2) => {
//   let sum = num1 + num2;

//   return sum;
// };

// addNumbers(2, 3);
// const result = addNumbers(10, 20); //30
// console.log(result);

// ? create an arrow function which calculates product of any two numbers

// const productNumbers = (x, y) => {
//   let product = x * y;

//   return product;
// };

// const res = productNumbers(2, 15); //30
// console.log(res);

// ? create a function which determines whether a number is odd or even

// const checkOddOrEven = (num) => {
//   let remainder = num % 2;

//   let result;

//   if (remainder === 0) {
//     result = 'even';
//   } else {
//     result = 'odd';
//   }

//   return result;
// };

// const res = checkOddOrEven(26);
// console.log(res);

// ?one liner
// const divideNumbers = (x, y) => x / y;

// const res = divideNumbers(10, 5);

// console.log(res);

// ? one liner odd or even
// const checkOddOrEven = (num) => (num % 2 === 0 ? 'even' : 'odd');

// const res = checkOddOrEven(26);
// console.log(res);

// ? convert dollar to cents
// const convertDollarToCents = (dollar) => {
//   let cents = dollar * 100;

//   return cents;
// };

// let res = convertDollarToCents(7);
// console.log(res);

// ? one liner
// const convertDollarToCents = (dollar) => dollar * 100;

// let res = convertDollarToCents(7);
// console.log(res);

// ? average of five numbers
// const avgCalculator = (a, b, c, d, e) => {
//   const sum = a + b + c + d + e;

//   const avg = sum / 5;

//   return avg;
// };

// const res = avgCalculator(15, 15, 15, 15, 15);

// console.log(res);

//  TODO:difference normal function and arrow function

// ? WAF to decide whether a number is prime or composite for any number greater than 2

// let num = 100;

// let isPrime = true;

// for (let i = 2; i < num; i++) {
//   let remainder = num % i;

//   if (remainder === 0) {
//     isPrime = false;
//     break;
//   }
// }

// console.log(isPrime);

//  with function

const checkPrime = (num) => {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    let remainder = num % i;

    if (remainder === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

const res = checkPrime(15);
console.log(res);
