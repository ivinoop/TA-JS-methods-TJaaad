let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord (a,b) {
  let result = a.length - b.length;
  return result; 
}

let newWords = [...words];
newWords.sort(findLongestWord);
console.log(newWords.pop());

// - Convert the above array "words" into an array of length of word instead of word.

let wordsLength = words.map((word) => word.length); 

// - Create a new array that only contains word with atleast one vowel.

let oneVowel = words.filter(vowel => {
  if (
    vowel.toLowerCase().includes("a") || 
    vowel.toLowerCase().includes("e") || 
    vowel.toLowerCase().includes("i") || 
    vowel.toLowerCase().includes("o") || 
    vowel.toLowerCase().includes("u") 
  ) {
    return vowel;
  }
});

// - Find the index of the word "rhythm"

console.log(words.indexOf('rhythm'));

// - Create a new array that contains words not starting with vowel.

function isVowel () {
  words.filter(isVowel => {
    if (
      isVowel.toLowerCase().includes("a") || 
      isVowel.toLowerCase().includes("e") || 
      isVowel.toLowerCase().includes("i") || 
      isVowel.toLowerCase().includes("o") || 
      isVowel.toLowerCase().includes("u") 
    ) {
      return isVowel;
    }
  });
}

let notVowel = words.filter(isNotVowel => {
  if(
    isNotVowel !== isVowel()) {
      return isNotVowel;
    }
});

// - Create a new array that contains words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers



// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multipleThree = numbers.filter(number => {
  return number % 3 === 0;
});

// - Create a new array that contains only even numbers

let evenNumbers = numbers.filter(evenNum => {
  return evenNum % 2 === 0;
})

// - Create  a new array that contains only odd numbers.

let oddNumbers = numbers.filter(oddNum => {
  return oddNum % 2 !== 0;
})

// - Create a new array that should have true for even number and false for odd numbers.

let trueFalseArr = numbers.filter(truefalse => {
  if(truefalse % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
})

// - Sort the above number in assending order.

let ascArr = [...numbers].sort((a,b) => {
  return a-b;
});

// - Does sort mutate the original array?

// - Yes it does

// - Find the sum of the numbers in the array.

let sumArr = numbers.reduce((acc, num) => {
  return acc + num;
},0);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers (numbers) {
  let sum = 0, avg = 0;
  for(let num of numbers) {
    sum += num;
    avg = sum/(numbers.length);
  }
  return avg;
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
