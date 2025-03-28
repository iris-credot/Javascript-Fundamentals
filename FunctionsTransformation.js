// Compose function
const compose = (...fns) => (x) => fns.reduceRight((v, fn) => fn(v), x);

//  Reverse and capitalize a string
const reverse = (str) => str.split('').reverse().join('');
const capitalize = (str) => str.toUpperCase();

const reverseAndCapitalize = compose(capitalize, reverse);

console.log(reverseAndCapitalize("hello")); 

//  Double all even numbers in an array
const isEven = (num) => num % 2 === 0;
const double = (num) => num * 2;

const doubleEvens = (arr) => arr.map(num => isEven(num) ? double(num) : num);

console.log(doubleEvens([1, 2, 3, 4, 5])); 

// adding new property status
const students = [
    { name: "Alice", grade: 80 },
    { name: "Bob", grade: 40 },
    { name: "Charlie", grade: 60 },
    { name: "David", grade: 30 }
  ];
  
  const addStatus = (students) => students.map(student => ({
    ...student,
    status: student.grade > 50 ? 'Pass' : 'Fail'
  }));
  
  console.log(addStatus(students));
   // sorting an array

   const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 35 }
  ];
  
  const sortByKey = (arr, key) => arr.sort((a, b) => a[key] - b[key]);
  
  console.log(sortByKey(people, 'age'));

// filter by keyword 

const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Jeans", category: "Clothing" }
  ];
  
  const filterByCategory = (products, category) => products.filter(product => product.category === category);
  
  console.log(filterByCategory(products, 'Electronics'));
  
  // cache 

  const cache = {};

const cachedFunction = (fn) => {
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Using cached result");
      return cache[key]; 
    } else {
      const result = fn(...args);
      cache[key] = result; 
      return result;
    }
  };
};

// Example function to calculate square of a number
const square = (num) => num * num;

const cachedSquare = cachedFunction(square);

console.log(cachedSquare(5)); 
console.log(cachedSquare(5)); 
console.log(cachedSquare(10)); 
console.log(cachedSquare(10));

  
