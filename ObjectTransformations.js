// 3. Object Transformations
// a. fullName
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

const person1 = { firstName: "IRIS", lastName: "CREDOT" };
console.log(fullName(person1)); 

// b. AnAdult
function AnAdult(person) {
    return person.age >= 18;
}

const person2 = { firstName: "Alice", lastName: "Smith", age: 17 };
console.log(AnAdult(person2)); 

// c. filterByAge
function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

const people = [
    { firstName: "GAGA", lastName: "KOKO", age: 17 },
    { firstName: "NIKK", lastName: "BAHY", age: 22 },
    { firstName: "Charlie", lastName: "NAYU", age: 30 }
];

console.log(filterByAge(people, 18)); 

// d. addProperty
function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}

const person3 = { firstName: "Emma", lastName: "Uwamahoro" };
console.log(addProperty(person3, "city", "KIGALI")); 


// e. hasProperty
function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}

console.log(hasProperty(person3, "city"));
console.log(hasProperty(person3, "age")); 

// f. countProperties
function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties(person3));
