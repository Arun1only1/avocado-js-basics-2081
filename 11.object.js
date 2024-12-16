// object
// ? key-value pair
// ?primary data types => string, number, boolean, null, undefined
// ? non-primary data  types => object

// ? non-primary data type can hold one or more primary data type

// const student1Name = 'Ashesh';
// const student1Age = 23;

// const student2Name = 'Saurav';
// const student2Age = 23;

// const student3Age = 23;
// const student3Name = 'Nikhil';

// const student1 = {
//   name: 'Ashesh',
//   age: 23,
// };

// const student2 = {
//   name: 'Saurav',
//   age: 23,
// };
// console.log(student1, typeof student1);

// ? CRUD
// ? Create/Add
// ? Read/Retrieve
// ? Update/Edit
// ? Delete/Remove

// const movie = {
//   name: 'Interstellar',
//   collection: '1 billion',
//   genre: 'sci-fi',
//   rating: 9.1,
//   isBlockBuster: true,
//   leadActor: 'Matthew McConaughey',
// };

// square operator
// console.log(movie['genre']);
// console.log(movie['isBlockBuster']);

// ? Read/Retrieve
// dot operator
// console.log(movie.name);
// console.log(movie.rating);

// ? print lead actor of movie "Interstellar" using dot and square brackets
// console.log(movie.leadActor);
// console.log(movie['leadActor']);

// ? Add key-value to object

// const carDetail = {
//   brand: 'Tesla',
//   model: 'X',
// };

// ?add field to object
// carDetail.year = 2024;
// carDetail['color'] = 'Blue';
// console.log(carDetail);

// ? update field inside object
// ? upsert => update or insert
// let laptopDetail = {
//   name: 'GF63',
//   brand: 'MSI',
//   ram: 16,
//   ssd: 512,
//   price: 2000,
// };

// laptopDetail.ram = 32;

// laptopDetail['ssd'] = 1024;
// console.log(laptopDetail);

// ? update price of laptop to 2000 usd
// laptopDetail.price = 2000;
// laptopDetail['price'] = 2000;
// console.log(laptopDetail);
// ? increase price of laptop  by 500 usd
// laptopDetail.price = laptopDetail.price + 500;
// laptopDetail.price += 500;

// console.log(laptopDetail);

// ? remove item from object
// let watchDetail = {
//   name: 'DW-5000',
//   brand: 'Casio',
//   price: 5000,
//   color: 'black',
//   hasLightingFeature: true,
// };

// delete watchDetail.price;
// delete watchDetail['color'];

// console.log(watchDetail);

// ? delete watch brand

// delete watchDetail.brand;
// console.log(watchDetail);

// ? nested object
// ? object inside an object

// const studentDetail = {
//   firstName: 'Biraj',
//   lastName: 'Acharya',

//   address: {
//     permanent: 'Tanahu',
//     temporary: 'Dallu',
//   },
// };

// console.log(studentDetail.firstName);
// console.log(studentDetail.address.permanent);
// console.log(studentDetail['address']['temporary']);
// console.log(studentDetail['address'].temporary);
// console.log(studentDetail.address['permanent']);

// TODO : const vs let

// let helmetDetail = {
//   brand: 'Axor',
//   color: 'green',
// };

//  I have a green colored Helmet from Axor.
// console.log(
//   `I have a ${helmetDetail.color} colored Helmet from ${helmetDetail.brand}.`
// );

// ? assignment
// 2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

// A.Delete numberOfMembers property
// B.Update numberOfRooms by new value
//C.Add a  new property called estimatedPriceOfHouse
// D.Print out all properties on the console like “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”

// const myHouseDetails = {
//   numberOfRooms: 9,
//   numberOfMembers: 6,
//   color: 'green',
//   builtYear: 1914,
//   numberOfStorey: 3,
// };
// a  solution
// delete myHouseDetails.numberOfMembers;

// myHouseDetails.numberOfRooms = 10;
// myHouseDetails.numberOfRooms += 2;
// console.log(myHouseDetails);
// myHouseDetails.estimatedPrice = '3 crore';
// console.log(myHouseDetails);

// console.log(`I have a  ${myHouseDetails.color} colored house.`);
// console.log('I have a ' + myHouseDetails.color + ' colored house.');
