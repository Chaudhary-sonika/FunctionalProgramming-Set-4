//1. Given an array, write an ES6 function that returns the total length of all the strings in an array.
// const strings = ["apple", "banana", "cherry", "date", "blueberry"];
const totalLength=(arrStr)=> arrStr.reduce((acc,curr)=>acc + curr.length, 0);

// console.log(totalLength(strings));

//2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array
// const numbers = [1,2,3,4,5];
const sumSquares=(arrNum)=> arrNum.reduce((accNum,currNum)=> accNum+(currNum*currNum), 0)
// console.log(sumSquares(numbers));

//3. Write an ES6 function that calculates and returns the total value of all items in an array of objects.
const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
  ];
const totalValue = (arrObj)=> arrObj.reduce((accItem, currItem)=>accItem+currItem.price, 0);
//   console.log(totalValue(items));

//4. Write an ES6 function that takes an array of strings as input and concatenates them into a single string
const concatStrings=(arr)=>arr.reduce((accArr, currArr)=> accArr + currArr);

// console.log(concatStrings(['this', 'is', 'fun']));

//5. Write an ES6 function to multiply and return all the elements of a given array.
// const numbers = [1,2,3,4,5];
const product =(num)=>num.reduce((acc, curr)=> acc*curr, 1);
// console.log(product(numbers));

//6. Write an ES6 function that takes an array of strings and returns the longest string.
const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
const longestString = (arrObjStr) => arrObjStr.reduce((accStr, currStr)=> accStr.length>currStr.length ? accStr : currStr);
// console.log(longestString(strings));

//7. Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

// const people = [{name:"Jeena", age: 25}, {name: "Priya", age: 30}, {name: "Naina", age: 45}];

const oldestPersonName = (arrObjAge) => arrObjAge.reduce((accObjAge, currObjAge)=> accObjAge.age > currObjAge.age ? accObjAge.name : currObjAge.name);
// console.log(oldestPersonName(people));

//8. Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.
const people = [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}, {name: "David", age: 40}];
const getAverageAge = (people)=>({averageAge:people.reduce((accObj, currObj)=>(accObj+ currObj.age), 0)/people.length}); 
// console.log(getAverageAge(people));

// 9. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.
const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 }
];
// price*quantity >>
const findMostExpensiveProduct = (objProduct)=> objProduct.reduce((accPrice, currPrice)=>accPrice.price*accPrice.quantity>currPrice.price*currPrice.quantity? accPrice:currPrice);
// console.log(findMostExpensiveProduct(products));

// 10. Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
const countStrings=(arrFruit)=> arrFruit.reduce((accObjFruit, currObjFruit)=> {accObjFruit[currObjFruit]?accObjFruit[currObjFruit]+=1:accObjFruit[currObjFruit]=1; return accObjFruit;}, {} );
console.log(countStrings(fruits));


// Question- Write a ES6 function that takes an array and return minimum number and maximum number as an object.
// output- {min:5, max:88}
const numbers = [12,22,44,88,5];
const minMaxNum = numbers.reduce(({min,max}, curr) =>{
    return {min:min>curr?curr:min, max:max<curr?curr:max}
}, {min:numbers[0], max:numbers[0]})
// console.log(minMaxNum);

// 1.Write a function that uses reduce to calculate the total amount of money earned by the restaurant from all the orders. Assume that each item costs $10.
// const orders = [
//   { tableNumber: 1, items: ['burger', 'fries', 'soda'] },
//   { tableNumber: 2, items: ['pizza', 'salad', 'water'] },
//   { tableNumber: 3, items: ['sandwich', 'soup', 'coffee'] },
// ];
const totalOrder = (orders)=> orders.reduce((accOrd, currOrd)=> accOrd+(currOrd.items.length * 10), 0);
// console.log(totalOrder(orders));

// 2. Write a function that uses reduce to find the user who has the most number of friends.
const users = [
  { id: 1, name: 'Alice', friends: ["Bob", "Charlie", "David"] },
  { id: 2, name: 'Bob', friends: ["Alice", "Charlie", "Eve"] },
  { id: 3, name: 'Charlie', friends: ["Alice", "Bob", "David", "Eve"] },
  { id: 4, name: 'David', friends: ["Alice", "Charlie"] },
  { id: 5, name: 'Eve', friends: ["Bob", "Charlie"] }, ];

  const mostNumOfFriends= (users)=> users.reduce((accUser, currUser)=> accUser.friends.length < currUser.friends.length ?currUser:accUser, users[0]).name;

//   console.log(mostNumOfFriends(users));

//3. Write a function that uses reduce to calculate the total revenue generated by the store from all the orders. Assume that the revenue from each order is the sum of the prices of all the items in the order.

// const orders = [
//   { id: 1, items: [{ name: 'book', price: 10 }, { name: 'pen', price: 2 }] },
//   { id: 2, items: [{ name: 'shirt', price: 20 }, { name: 'pants', price: 30 }] },
//   { id: 3, items: [{ name: 'hat', price: 15 }, { name: 'socks', price: 5 }] },
// ];
const priceOfAllOrder=(arrOrder)=> arrOrder.reduce((arrObjOrd, currObjOrd)=> arrObjOrd + currObjOrd.items.reduce((a,c)=> a+c.price,0),0 );
// console.log(priceOfAllOrder(orders));

//4. Write a function that uses reduce to calculate the total revenue generated by the company from all the sales. Assume that the revenue from each sale is the product of the amount and price.
const sales = [
  { product: 'apple', amount: 100, price: 1 },
  { product: 'banana', amount: 200, price: 0.5 },
  { product: 'orange', amount: 300, price: 0.75 },
  { product: 'grape', amount: 400, price: 0.4 },
];
const totalRevenue = (arrS)=> arrS.reduce((ac, cr)=> ac+(cr.amount*cr.price), 0);
// console.log(totalRevenue(sales));

// 5.Write a function that uses reduce to calculate the total amount of money earned by the restaurant from all the orders.
const foodPrices = {
    burger: 50, 
    fries: 30,
    soda: 8, 
    pizza: 60, 
    salad: 10, 
    water: 2,
    sandwich: 30, 
    soup: 10, 
    coffee: 100
    }
    const orders = [
      { tableNumber: 1, items: ['burger', 'fries', 'soda'] },
      { tableNumber: 2, items: ['pizza', 'salad', 'water'] },
      { tableNumber: 3, items: ['sandwich', 'soup', 'coffee'] },
    ];
  //1st mathod--  
  // let totalAmountRestaurentEarned = 0;
  //  for(let i = 0; i<orders.length; i++){
  //   let tableAmountEarned = 0;
  //   for(let j=0; j<orders[i].items.length; j++){
  //     tableAmountEarned=tableAmountEarned+foodPrices[orders[i].items[j]];
  //   }
  //   totalAmountRestaurentEarned=totalAmountRestaurentEarned + tableAmountEarned;
  //  }
  //  console.log(totalAmountRestaurentEarned);

const totalAmountRestaurentEarned =(array, obj)=> array.reduce((totalAmount, currFoodP)=>(totalAmount+ currFoodP.items.reduce((tableBill, tableItem)=>(tableBill+obj[tableItem]),0)),0)

// console.log(totalAmountRestaurentEarned(orders, foodPrices));
    // const totalAmountEarned=(foodPrices, orders)=> orders.reduce((acOrd, crOrd)=>)

    // const totalAmountEarned = (arr, price) => arr.reduce((acc, curr) => acc + curr.items.reduce((acc, item) => acc + price[item], 0), 0)
    

    // const stringCount =(name, callBack)=> callBack(name.length);
    // stringCount('sonika', (nameStrLength)=> console.log(`OMG! my name is ${nameStrLength} char long!`))

    // const willThanosKillMe = (name, iDie, iLive)=> name.length%2===0? iLive(): iDie();
    // willThanosKillMe('sonika', ()=> console.log(`Give My laptop to my sister`), () =>console.log(`Yey, i live`))