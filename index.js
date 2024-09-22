// 1. Challenge: Calculate the sum of all numbers in an array.
const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const values = [1, 2, 3, 4, 5];
console.log(sumArray(values)); // Expected output: 15

// 2. Challenge: Calculate the product of all numbers in an array.
const productArray = (arr) => arr.reduce((acc, curr) => acc * curr, 1);
const factors = [1, 2, 3, 4];
console.log(productArray(factors)); // Expected output: 24

// 3. Challenge: Count the number of occurrences of each word in an array.
const countOccurrences = (arr) => arr.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countOccurrences(fruits)); // Expected output: { apple: 3, banana: 2, orange: 1 }

// 4. Challenge: Find the maximum value in an array.
const findMaxValue = (arr) => arr.reduce((max, curr) => curr > max ? curr : max, arr[0]);
const scores = [10, 5, 20, 30, 15];
console.log(findMaxValue(scores)); // Expected output: 30

// 5. Challenge: Group an array of objects by a property.
const groupByProperty = (arr, prop) => arr.reduce((acc, obj) => {
  const key = obj[prop];
  if (!acc[key]) acc[key] = [];
  acc[key].push(obj);
  return acc;
}, {});
const students = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 25 },
];
console.log(groupByProperty(students, 'age'));
// Expected output: { 21: [{ name: 'Alice', age: 21 }, { name: 'Bob', age: 21 }], 25: [{ name: 'Charlie', age: 25 }] }

// 6. Challenge: Calculate the total price of items in a shopping cart.
const totalPrice = (arr) => arr.reduce((acc, item) => acc + item.price, 0);
const items = [
  { item: 'Book', price: 10 },
  { item: 'Pen', price: 2 },
  { item: 'Notebook', price: 5 },
];
console.log(totalPrice(items)); // Expected output: 17

// 7. Challenge: Convert an array of key-value pairs into an object.
const arrayToObject = (arr) => arr.reduce((obj, [key, value]) => {
  obj[key] = value;
  return obj;
}, {});
const dataPairs = [['name', 'Alice'], ['age', 21], ['city', 'New York']];
console.log(arrayToObject(dataPairs)); // Expected output: { name: 'Alice', age: 21, city: 'New York' }

// 8. Challenge: Remove duplicate values from an array.
const removeDuplicates = (arr) => arr.reduce((unique, item) => {
  if (!unique.includes(item)) unique.push(item);
  return unique;
}, []);
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // Expected output: [1, 2, 3, 4, 5]

// 9. Challenge: Calculate the average of numbers in an array.
const calculateAverage = (arr) => arr.reduce((acc, curr, _, { length }) => acc + curr / length, 0);
const grades = [10, 20, 30, 40];
console.log(calculateAverage(grades)); // Expected output: 25

  









