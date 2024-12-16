// object copy

// let player1 = {
//   firstName: 'Rohit',
//   lastName: 'Poudel',
//   age: 25,
// };

// shallow copy / stores reference(address) of object
// let player2 = player1;
// player2.firstName = 'Virat';
// player2.age = 50;

// player1.lastName = 'Panta';
// console.log(player2);

// shallow copy
// spread operator ...
// let laptop1Detail = {
//   brand: 'Apple',
//   price: 2500,
//   colors: {
//     color1: 'green',
//     color2: 'orange',
//   },
// };

// let laptop2Detail = { ...laptop1Detail };
// laptop2Detail.colors.color1 = 'blue';
// console.log(laptop1Detail);

// ? deep copy
// structuredClone
// let glass1 = {
//   material: 'ceramics',
//   color: 'pink',
//   size: {
//     value: 250,
//     unit: 'ml',
//   },
//   companies: {
//     company1: 'servewell',
//     company2: 'everest',
//   },
// };

// let glass2 = structuredClone(glass1);

// // glass1.color = 'green';
// glass1.companies.company1 = 'sagarmatha';

// console.log(glass2);

// let user1 = 'Rohan';
// let user2 = user1;

// user1 = 'Saurav';
// console.log(user2);
