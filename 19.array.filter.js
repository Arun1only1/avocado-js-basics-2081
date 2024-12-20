// filter => filters out value from array based upon condition

const print = (value) => {
  console.log(value);
};
// ? filter is likely to change array size
// ? filter does not change array content
// const numList = [-100, 200, -55, 600, -75, 25];

// const newList = numList.filter((item, index, array) => {
//   return item > 0;
// });

// console.log(newList);

// let userNames = ['Aayush', 'Praful', 'Kalyan', 'Subodh', 'Biraj'];

// ? get all user names except "Subodh"

//  filter out odd numbers
// let numList = [25, 30, 35, 40, 45, 50, 55, 0, 60, 65, 70];

// const newList = numList.filter((item, index, array) => {
//   let remainder = item % 2;

//   if (remainder === 0) {
//     return item;
//   }
// });

// const newList = numList.filter((item, index, array) => {
//   let remainder = item % 2;

//   return remainder === 0;
// });

// one liner
// const newList = numList.filter((item) => item % 2 === 0);

// console.log(newList);

// let marriageData = [
//   {
//     name: 'Govinda',
//     isMarried: true,
//     age: 17,
//   },
//   {
//     name: 'Aayush',
//     isMarried: false,
//     age: 19,
//   },
//   {
//     name: 'Praful',
//     isMarried: true,
//     age: 20,
//   },
//   {
//     name: 'Subodh',
//     isMarried: false,
//     age: 11,
//   },
// ];

// ? get all unmarried people who are above 18 years of age

// const unmarriedData = marriageData.filter((item, index, array) => {
//   if (item.age > 18 && !item.isMarried) {
//     return item;
//   }
// });

// const unmarriedData = marriageData.filter((item, index, array) => {
//   let isUnmarriedAdult = item.age > 18 && !item.isMarried;

//   return isUnmarriedAdult;
// });

// console.log(unmarriedData);

const laptops = [
  {
    name: 'Inspiron 3511',
    price: 55000,
    brand: 'dell',
  },
  {
    name: 'Acer Nitro',
    price: 109000,
    brand: 'acer',
  },
  {
    name: 'TUF F15',
    price: 205000,
    brand: 'asus',
  },
  {
    name: 'Vivobook',
    price: 76000,
    brand: 'asus',
  },
  {
    name: 'Aspire 5',
    price: 87500,
    brand: 'acer',
  },
  {
    name: 'Modern 14',
    price: 92000,
    brand: 'msi',
  },
  {
    name: 'Thinkpad X13',
    price: 149000,
    brand: 'lenovo',
  },

  {
    name: 'TUF F16',
    price: 205000,
    brand: 'asus',
  },
  {
    name: 'Legion 5 PRO',
    price: 188000,
    brand: 'lenovo',
  },
  {
    name: 'Predator Helios 300',
    price: 169000,
    brand: 'acer',
  },
  {
    name: 'GP66 Leopard',
    price: 199000,
    brand: 'msi',
  },
];

// ? get all asus laptops
// const newLaptopList = laptops.filter((item, index, array) => {
//   if (item.brand === 'asus') {
//     return item;
//   }
// });

// const newLaptopList = laptops.filter((item, index, array) => {
//   return item.brand === 'asus';
// });

// one liner
// const newLaptopList = laptops.filter((item) => item.brand === 'asus');

// console.log(newLaptopList);

// ? decrease price of msi laptop by 20000
// const newLaptopList = laptops.map((item, index, array) => {
//   if (item.brand === 'msi') {
//     item.price = item.price - 20000;
//   }

//   return item;
// });

// const newLaptopList = laptops.map((item) =>
//   item.brand === 'msi' ? { ...item, price: item.price - 20000 } : item
// );

// print(newLaptopList);

// ?update "aspire 5" to "aspire 6"  and increase its price by 10000
// const newLaptopList = laptops.map((item) => {
//   if (item.name === 'Aspire 5') {
//     let newName = 'Aspire 6';
//     let newPrice = item.price + 10000;

//     return { ...item, name: newName, price: newPrice };
//   }

//   return item;
// });
// console.log(newLaptopList);

// const newLaptopList = laptops.map((item) =>
//   item.name === 'Aspire 5'
//     ? { ...item, name: 'Aspire 6', price: item.price + 10000 }
//     : item
// );
// console.log(newLaptopList);

// ? get all premium laptops whose price is above 200k
// const premium = laptops.filter((item, index, array) => {
//   if (item.price >= 200000) {
//     return item;
//   }
// });
// console.log(pre)

// const premium = laptops.filter((item, index, array) => {
//   return item.price >= 200000;
// });
// console.log(premium);
// ? increase price of each laptop by 10k
// const newLaptopList = laptops.map((item) => {
//   let newPrice = item.price + 10000;
//   return { ...item, price: newPrice };
// });
// console.log(newLaptopList);

// ? alternative code
// const newLaptopList = laptops.map((item) => ({
//   ...item,
//   price: item.price + 10000,
// }));
// console.log(newLaptopList);

// ? remove lenovo laptops from laptopList
// const removeLenovo = laptops.filter((item) => {
//   if (item.brand !== 'lenovo') {
//     return item;
//   }
// });
// console.log(removeLenovo);

// const removeLenovo = laptops.filter((item) => {
//   return item.brand !== 'lenovo';
// });

// console.log(removeLenovo);

// ? get all laptops whose price ranges from 1 lakh to 2 lakh
// const price = laptops.filter(
//   (item) => item.price > 100000 && item.price < 200000
// );
// console.log(price);

// const filteredLaptops = laptops.filter((item) => {
//   if (item.price > 100000 && item.price < 200000) {
//     return item;
//   }
// });
// console.log(filteredLaptops);
