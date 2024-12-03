// conditionals
// code is executed based upon certain condition

// default code execution sequential
// conditionals may not follow sequential code execution
// console.log('hi');

// console.log(2 + 3);

// console.log('hello');

// ?if

// ?syntax
// if(condition){
// code here
// }

// if (false) {
//   console.log('Hello World');
// }

// let c1 = '25' === 25; //false
// if (c1) {
//   console.log('true condition');
// }

// db => userList
// if(user.hasSubscription<7){
// send email/sms
// }

//? if ..else
// syntax
// if (condition) {
// code here
// } else {
// code here
// }

// if (false) {
//   console.log('A');
// } else {
//   console.log('B');
// }

// ? check if provided number is odd or even
// let num = 51;
// let remainder = num % 2;

// if (remainder === 0) {
//   console.log(`${num} is even.`);
// } else {
//   console.log(`${num} is odd.`);
// }

// ?Find the largest of two numbers.

// let x = -225;
// let y = -55;

// if (x > y) {
//   console.log('x is greatest');
// } else {
//   console.log('y is greatest');
// }

// ? find the largest of three different numbers
// let a = 5;
// let b = 66;
// let c = 25;

// if (a > b && a > c) {
//   console.log('a is greatest');
// } else if (b > c) {
//   console.log('b is greatest');
// } else {
//   console.log('c is greatest.');
// }

// ? check if type of variable is string or not
// let m = 'string';

// console.log(typeof m);
// if (typeof m === 'string') {
//   console.log('m is string');
// } else {
//   console.log('m is not string');
// }

// ? check if type of a variable is number
// let n = 5;

// let type = typeof n; //"number"
// if (type === 'number') {
//   console.log('n is a number');
// } else {
//   console.log('n is not a number');
// }

// ?calculator
// let m = 18;
// let n = 6;
// let option = 'divide'; //"add"/"subtract"/"multiply"/"divide"

// if (option === 'add') {
//   console.log(m + n);
// } else if (option === 'subtract') {
//   console.log(m - n);
// } else if (option === 'multiply') {
//   console.log(m * n);
// } else {
//   console.log(m / n);
// }

// === same example using switch =====
// multiple choice question => switch

// ? switch
// ? syntax
// switch(condition){
// case 1:
// code
// break;

// case 2:
// code
// break;

// case 3:
// code
// break;

// default:
// console.log("no option matched")
// }

// let x = 15;
// let y = 3;

// let option = '';

// switch (option) {
//   case 'add':
//     console.log(x + y);
//     break;

//   case 'subtract':
//     console.log(x - y);
//     break;

//   case 'multiply':
//     console.log(x * y);
//     break;

//   case 'divide':
//     console.log(x / y);
//     console.log(x / y);
//     break;

//   default:
//     console.log('No option matched...');
// }

// ? ternary
// shortcut of if..else

// let m = 25;
// let remainder = m % 2;

// if (remainder === 0) {
//   console.log('even');
// } else {
//   console.log('odd');
// }

// ?syntax
// condition ? true_case : false_case
// let m = 54;
// let remainder = m % 2; //0

// console.log(remainder === 0 ? 'even' : 'odd');

// TODO: ternary chaining

// Find the largest of two different numbers.

// let a = 55;
// let b = 7;

// if (a > b) {
//   console.log('a is largest');
// } else {
//   console.log('b is largest');
// }
// a > b ? console.log('a is largest') : console.log('b is largest');

// console.log(a > b ? 'a is largest' : 'b is largest');

// ? grade question
let marks = 100;

if (marks >= 90) {
  console.log('grade => A+');
} else if (marks >= 80) {
  console.log('grade => A');
} else if (marks >= 70) {
  console.log('grade=> B');
} else if (marks > 60) {
  console.log('grade => C');
} else {
  console.log('Try again');
}
