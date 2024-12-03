// operator => symbol which has specific function

// ?arithmetic operator
// ?assignment operator
// ?comparison operator
// ?logical operator

// ? 1. arithmetic operator
// ? +, - , * , / , % ,**

// console.log(2 ** 3);
// console.log(Math.pow(2, 3));

// console.log(2 + 3);
// console.log(10 - 5);
// console.log(2 * 3);
// console.log(10 / 5);
// ? % => remainder

// console.log(9 % 2);

// ? 2 assignment operator
// ? short cut
// ?  = ,+=, -=, *= ,/= ,%=

// let x = 2;
// x += 5;

// b =b**2, where b =3
// let b = 3;
// b **= 2; // b= b ** 2
// console.log(b);

// let x = 5;
// x += 2; // x= x+2
// console.log(x);

// let x = 25;
// x %= 2; //x= x% 2
// console.log(x);

// const x = 3;
// x = 5;
// console.log(x);

// ? 3. comparison operator
// ? always results in boolean
// ? == , === , != , !==, < ,>, <= ,>=
// ? we need at least two entities to compare

// ? == weak comparison => just checks value
// ?numeric string and number comparison
// ! ignores data type
// let a = '5';
// let b = 5;
// console.log(a == b); // just value

// ! this gives false
// let condition1 = true;
// let condition2 = 'true';
// console.log(condition1 == condition2);

// ? == strong/strict comparison => value + data type
// let a = 25;
// let b = '25';
// console.log(a === b);

//? != (not equal to)
// ? weak comparison

// let m = 5;
// let n = '5';
// console.log(m != n);

// ? !==
// let q = '25';
// let r = 25;
// console.log(q !== r);

// ? <

// console.log(2 < 5);

// ?  <= (less than or equal to)
// console.log(2 <= 2);
// console.log(100 <= 200);

// ? >
// console.log(2 > 5);

// ? >=
// console.log(2 >= 5);
// console.log(1 >= 2);

// console.log('rina' === 'rina');

// console.log('D' > 'd');

// ?4. logical operator
// ? and(&&) , or(||) , not (!)

// let c1 = 'Nepal' === 'Nepal';
// let c2 = 5 > 2;
// let c3 = '5' === 5;

// or (||) => plus
// ? if any one condition is true, result is always true
// console.log(c1 || c2 || c3);
// ? short circuit here happens cause c1 is true
// ? so that c2 and c3 are ignored because result is always true(c1=true)

// and (&&) => multiply
// short circuit
// => if any one condition false, result is always false
// let condition1 = 'minal@gmail.com' === 'Minal@gmail.com'; //false
// let condition2 = 'google_login' !== 'facebook_login'; //true

// console.log(condition1 && condition2);
