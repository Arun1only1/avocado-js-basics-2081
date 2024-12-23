const sendEmail = (userName) => {
  console.log(`Hello ${userName}, You have an email.`);
};

const userList = [
  {
    id: 1,
    firstName: 'Rohan',
    lastName: 'Bhandari',
    age: 25,
    userName: 'rohan99',
    isMarried: false,
    isGraduated: null,
  },
  {
    id: 2,
    firstName: 'Samarajya',
    lastName: 'Shrestha',
    age: 27,
    userName: 'sam@123',
    isMarried: true,
    isGraduated: true,
  },

  {
    id: 3,
    firstName: 'Ganesh',
    lastName: 'Adhikari',
    age: 29,
    userName: 'gunny',
    isMarried: true,
    isGraduated: false,
  },

  {
    id: 4,
    firstName: 'Saurab',
    lastName: 'Shrestha',
    age: 17,
    userName: 'saurab1999',
    isMarried: false,
    isGraduated: true,
  },

  {
    id: 5,
    firstName: 'Amun',
    lastName: 'Timilsina',
    age: 31,
    userName: 'amun22',
    isMarried: false,
    isGraduated: null,
  },
];

// ? 1.find all users who are graduated
// const graduatedUserList = userList.filter((item, index, array) => {
//   if (item.isGraduated) {
//     return item;
//   }
// });

// one liner
// const graduatedUserList = userList.filter((item) => item.isGraduated);
// console.log(graduatedUserList);

// ?2. find first user who is graduated but unmarried
// const user = userList.find((item) => {
//   if (item.isGraduated && !item.isMarried) {
//     return item;
//   }
// });

// ? one liner
// const user = userList.find((item) => item.isGraduated && !item.isMarried);

// console.log(user);

// ? 3.update amun's age by 5 years
// const newUserList = userList.map((item) => {
//   if (item.firstName.toLocaleLowerCase() === 'amun') {
//     item.age = item.age + 5;
//   }

//   return item;
// });

// console.log(newUserList);

// ? 4.remove user whose age is less than 18 and return list with adult users only
// const newUserList = userList.filter((item) => {
//   if (item.age >= 18) {
//     return item;
//   }
// });

// console.log(newUserList);

// ?  5.change all graduated users to married users
// const newUserList = userList.map((item, index, array) => {
//   if (item.isGraduated) {
//     return { ...item, isMarried: true };
//   }
//   return { ...item };
// });

// console.log(userList);

// ? 6.send email to users whose age is less than 25 and is unmarried

// userList.forEach((item) => {
//   if (item.age < 25 && !item.isMarried) {
//     sendEmail(item.userName);
//   }
// });

// userList.forEach(
//   (item) => item.age < 25 && !item.isMarried && sendEmail(item.userName)
// );

// ? 7.remove last user from array

// userList.pop();
// console.log(userList);

// ?8. add yourself as new user to end of array

// userList.push({
//   id: 6,
//   firstName: 'Reena',
//   lastName: 'Maharjan',
//   age: 26,
//   userName: 'reena123',
//   isGraduated: true,
//   isMarried: false,
// });

// console.log(userList);

// ? push, pop, map, filter, find, forEach
