// 1. String Transformations
//Capitalizing
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello world")); 

//Reverse
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse("hello")); 

//Palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === reverse(cleaned);
}
console.log(isPalindrome("madam")); 

//Wordcount
function wordCount(str) {
    return str.trim().split(/\s+/).length;
}
console.log(wordCount("Hello world! This is JavaScript.")); 

//ToSnakeCase
function toSnakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, '_');
}
console.log(toSnakeCase("Hello World JavaScript")); 

//ToCamelCase
function toCamelCase(str) {
    return str.toLowerCase().replace(/(?:\s+|_)(\w)/g, (_, c) => c.toUpperCase());
}
console.log(toCamelCase("hello world javascript")); 

//LongestWord
function longestWord(str) {
    return str.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log(longestWord("JavaScript is a powerful programming language")); 

//CountLetter
function countLetter(str, letter) {
    return str.split('').filter(c => c === letter).length;
}
console.log(countLetter("JavaScript is awesome", "a")); 