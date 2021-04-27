// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

numbers.indexOf(101);

// - Find the last index of `9` in numbers

numbers.lastIndexOf(101);

// - Convert value of strings array into a sentence like "This is a collection of words"

strings.join(" ");

// - Add two new words in the strings array "called" and "sentence"

strings.push('called', 'sentence');

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentence"

strings.join(" ");

// - Remove the first word in the array (strings)

strings.shift();

// - Find all the words that contain 'is' use string method 'includes'

let stringIs = [];
strings.forEach(str => {
  if(str.includes('is')){
    stringIs.push(str);
  }
});
console.log(stringIs);

// - Find all the words that contain 'is' use string method 'indexOf'

let stringIs = [];
strings.forEach(str => {
  if(strings.indexOf(str) === 'is'){
    stringIs.push(str);
  }
});
console.log(stringIs);

// - Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every(number => {
  return number % 3 === 0;
});

// -  Sort Array from smallest to largest

numbers.sort((a,b) => {
  return a - b;
});

// - Remove the last word in strings

strings.pop();

// - Find largest number in numbers

let largest = numbers.forEach((a,b) => {
  if (a > b) {
    return a;
  } else return b;
});

// - Find longest string in strings

strings.forEach(str => {
  if(str[i].length > str[i+1].length) {
    return str[i];
  }  
})

// - Find all the even numbers

numbers.filter(num => {
  return num % 2 === 0;
});

// - Find all the odd numbers

numbers.filter(num => {
  return num % 2 !== 0;
});

// - Place a new word at the start of the array use (unshift)

strings.unshift("newWord");

// - Make a subset of numbers array [18,9,7,11]

let newNumbers = [18,9,7,11];
numbers.push(newNumbers);

// - Make a subset of strings array ['a','collection']

let newStrings = ['a','collection'];
strings.push(newStrings);

// - Replace 12 & 18 with 1221 and 1881


// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

customers.firstname.forEach (function () {
  if(customers.firstname.startsWith)
})

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
