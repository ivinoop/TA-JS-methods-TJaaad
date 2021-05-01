let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array

let peopleName = [];
persons.forEach(person => {
  peopleName.push(`${person.name}`);
});

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = [];
persons.forEach(person => {
  peopleGrade.push(`${person.grade}`);
});

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = [];
persons.forEach(person => {
  peopleSex.push(`${person.sex}`);
});

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let nameWithJP = peopleName.filter(name => {
  return name.startsWith('J') || name.startsWith('P');
});

// Log the length of filtered names of people in peopleName that starts with 'A' and 'C'

let nameWithAC = peopleName.filter(name => {
  return name.startsWith('A') || name.startsWith('C');
});

nameWithAC.forEach(name => {
  console.log(name.length);
});

// Log all the filtered male ('M') in persons array

let malePersons = [];
persons.filter(male => {
  if (male.sex === 'M') {
    malePersons.push(male.name);
  }
});

// Log all the filtered female ('F') in persons array

let femalePersons = [];
persons.filter(female => {
  if (female.sex === 'F') {
    femalePersons.push(female.name);
  }
});

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let femaleNameWithCJ = femalePersons.filter(name => {
  return name.startsWith('C') || name.startsWith('J');
})

// Log all the even numbers from peopleGrade array

let evenGrade = peopleGrade.filter(grade => {
  return grade % 2 === 0;
})

// Find the first name that starts with 'J' in persons array and log the object

let nameWithJ = persons.find(j => {
  return j.name.startsWith('J');
})

// Find the first name that starts with 'P' in persons array and log the object

let nameWithP = persons.find(j => {
  return j.name.startsWith('P');
})

// Find the first name that starts with 'J', grade is greater than 10 and is a female

let nameWithJGradeFemale = persons.find(person => {
  if(person.name.startsWith('J') && person.grade > 10 && person.sex === 'F'){
    return person.name;
  }
})

// Filter all the female from persons array and store in femalePersons array

console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array

console.log(malePersons);

// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((acc, cv) => {
  return acc + cv;
}, 0);

// Find the average grade

// Find the average grade of male

// Find the average grade of female

// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
