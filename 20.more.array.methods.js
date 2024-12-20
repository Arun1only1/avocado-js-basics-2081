// ? find
// ? almost like filter
// ? filter returns array
// ? find returns first item which matches the condition

// let laptopList = [25, 35, 45, 60, 80];

// ? find number greater than 50
// const matchedItem = laptopList.filter((item) => {
//   if (item > 60) {
//     return item;
//   }
// });

// console.log(matchedItem);

const userList = [
  {
    email: 'kunal@gmail.com',
    userName: 'Kunal123',
  },
  {
    email: 'nitesh@gmail.com',
    userName: 'Nitesh123',
  },
  {
    email: 'subidh@gmail.com',
    userName: 'Subodh123',
  },
  {
    email: 'KALYAN@gmail.com',
    userName: 'Kalyan123',
  },
  {
    email: 'praful@gmail.com',
    userName: 'Praful123',
  },
];

// ? find user whose email is "kalyan@gmail.com"

// const userKalyan = userList.find((item) => {
//   if (item.email === 'KALYAN@gmail.com') {
//     return item;
//   }
// });
// console.log(userKalyan);
// const userKalyan = userList.find((item) => {
//   return item.email.toLowerCase() === 'kalyan@gmail.com';
// });
// console.log(userKalyan);

// ? findIndex => returns index of first item which matches the condition

// console.log('hello'.toUpperCase());
// console.log('HEllo'.toLowerCase());
