// ?slice, splice, every,some, sort

// ? slice => to split an array
// ? syntax
// 1. array.slice()
// 2. array.slice(start)
// 3. array.slice(start,end)
// ? start is included, end is not included(excluded)

// let movieList = [
//   'Shawshank Redemption',
//   'Forrest Gump',
//   'Cast away',
//   'Peaky Blinders',
//   'Interstellar',
//   'Good Will Hunting',
//   '12 Angry Men',
//   '2001: A space odyssey',
// ];

// console.log(movieList);
// let newMovieList = movieList.slice(2);

// let newMovieList = movieList.slice(1, 4);
// let newMovieList = movieList.slice(-3);
// console.log(newMovieList);

// ? splice
// ? delete, insert item from array
// ? syntax
// array.splice(start, deleteCount, item)
// array.splice(start, deleteCount, item1, item2,itemN)

// let days = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday'];

// days.splice(1, 2, 'Monday');
// console.log(days);
// console.log(days);

// let animals = ['cow', 'dog', 'cat', 'elephant', 'bison', 'horse'];

// animals.splice(4, 0, 'giraffe', 'ant');
// console.log(animals);
// ? remove dog from animals list
// const newArray = animals.toSpliced(1, 1);
// console.log(animals);
// console.log(newArray);

// ? every => runs loop for each item
// ? returns true if every item satisfies the condition
// ? result in boolean

// let numList = [29, 56, 78, 89, 86];

// let isEveryElementPositive = true;

// numList.forEach((item) => {
//   if (item < 0) {
//     isEveryElementPositive = false;
//   }
// });

// console.log(isEveryElementPositive);

// const isAllPositive = numList.every((item) => {
//   return item > 0;
// });

// console.log(isAllPositive);

const userList = [
  {
    userName: 'john',
    age: 25,
    hasSubscribed: true,
  },

  {
    userName: 'jane',
    age: 19,
    hasSubscribed: false,
  },
  {
    userName: 'julie',
    age: 10,
    hasSubscribed: true,
  },
  {
    userName: 'kylie',
    age: 15,
    hasSubscribed: true,
  },
];

// ? check if all users are adult(i.e gconst hasAnyOnePassed = scoreList.some((item) => {
//   return item >= 32;
// });

// console.log(hasAnyOnePassed);reater than or equal to 18 years old)

// const isAllAdultUser = userList.every((item) => item.age >= 18);
// console.log(isAllAdultUser);

// ? check if any user is under 18

// ? some => runs loop
// ? return true if any item satisfies the condition
// ? returns boolean
// const hasAnyOnePassed = scoreList.some((item) => {
//   return item >= 32;
// });

// console.log(hasAnyOnePassed);
// const scoreList = [19, 29, 27, 40];
// const hasAnyOnePassed = scoreList.some((item) => {
//   return item >= 32;
// });

// const hasAnyOnePassed = scoreList.some((item) => {
//   return item >= 32;
// });

// console.log(hasAnyOnePassed);

// ? check if any user is under 18
// const isAnyOneChildren = userList.some((item) => {
//   return item.age < 18;
// });

// console.log(isAnyOneChildren);

// ? find all users who are not adult
// const childUsers = userList.filter((item) => {
//   return item.age < 18;
// });

// const users = childUsers.map((item) => {
//   return item.userName;
// });

// const users = userList
//   .filter((item) => item.age < 18)
//   .map((item) => item.userName);

// console.log(users);

// ? sort
// let users = [
//   'Pramod',
//   'Govinda',
//   'Ishika',
//   'Udaya',
//   'Avishek',
//   'Aaradhya',
//   'Amitabh',
// ];

// users.sort(); // ascending sort
// users.reverse();

// users.sort().reverse(); //descending sort
// console.log(users);

// ? number sort
// let numList = [50, 1, 10, 5, 6, 11, 12, 113, 2, 3, 25];

// numList.sort((a, b) => {
//   return a - b; //ascending sort
// });

// numList.sort((a, b) => {
//   return b - a; //descending sort
// });
// console.log(numList);

// let arr = ['arun', 'Arun'].sort();
// console.log(arr);
