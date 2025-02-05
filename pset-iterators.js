/*
Instructions:

For this problem set you will be working with a
list of U.S. Presidents stored as an array of
objects. The array has **already been provided for
you** as a variable named "presidents".

You can see the full list of us presidents in the
provided file named `us-presidents.js`

All of the following problems require that you
use the `presidents` array to solve them.

Only use either `.map()`, `.find()` or `.filter()` to solve the problems in the problem set

  * Do not use `.forEach()`

You can use any additional variables that you deem necessary
to solve each problem.

You can use either regular functions or
arrow functions **for your iterator callbacks**

*/

const presidents = require('./us-presidents.js') // <- DO NOT Remove; this represents an array consisting of U.S. Presidents

/***********
Problem 1:

1. Using the `presidents` array, return the "name" of the
first president that was a member of the "Whig" party.
Save the data in a variable called `firstWhigPresident`,
declared with const

2. Print `firstWhigPresident` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 1:')

// Add your code below this line
const firstWhigPresident = presidents.find(function (firstWhigMember) {
  return firstWhigMember.party === "Whig"
})

console.log(firstWhigPresident.president)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `presidents` array, return a list of all the
presidents whose first name was "James".
Save the data in a variable called `presidentsNamedJames`,
declared with const

2. Print `presidentsNamedJames` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 2:')

// Add your code below this line
const presidentsNamedJames = presidents.filter((firstNameJames) => {
  return firstNameJames.president.includes('James')
}).map((firstNameJames) => {
  return firstNameJames.president
})

console.log(presidentsNamedJames);
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `presidents` array, return a list of the
parties associated each of the presidents.
Save the data in a variable called `presidentialParties`,
declared with const

2. Print `presidentialParties` to the console

(partial) Expected Result: ['No Party', 'Federalist', 'Democratic-Republican', 'Democratic-Republican', 'Democratic-Republican', 'Democratic', .... ]

Expected Result Shape: An array of strings representing the party name of each president

Tip: your new array should contain 45 elements

************/
console.log('Problem 3:')

// Add your code below this line
const presidentialParties = presidents.filter(function (parties) {
  return parties.party
}).map(function (parties) {
  return parties.party
})

console.log(presidentialParties)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `presidents` array, return a
list of the presidents who took office
between 1850 and 1900. Save the data in a variable called `presidentsBetween1850and1900`, declared with const

2. Print `presidentsBetween1850and1900` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 4:')

// Add your code below this line

const presidentsBetween1850and1900 = presidents.filter(function (between1850And1900) {
  return (between1850And1900.left_office) ? parseInt(between1850And1900.took_office.substring(0, 4)) >= 1850 && parseInt(between1850And1900.left_office.substring(0, 4)) < 1900 : false;
}).map(function (president) {
  return president.president
})

console.log(presidentsBetween1850and1900)
// Add your code above this line

/** added for formatting purposes **/
console.log('');
console.log('-----------------')

/***********
Problem 5:

1. Using the `presidents` array, return a list of the
presidents who are still alive today.
Save the data in a variable called `livingPresidents`,
declared with const

2. Print `livingPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 5:')

// Add your code below this line
const livingPresidents = presidents.filter((presidentsAlive) => {
  return presidentsAlive.death_year === null;
})

// Calling the callback livingPresidents in the console.
console.log(livingPresidents)
// Add your code above this line

/** added for formatting purposes **/
console.log('');
console.log('-----------------')

/***********
Problem 6:

1. Using the `presidents` array,
return the "name" of the first "Republican" president.
Save the data in a variable
called `firstRepublican`, declared with const

2. Print `firstRepublican` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 6:')

// Add your code below this line
const firstRepublican = presidents.find(function (firstRepublicanMember) {
  return firstRepublicanMember.party === "Republican"
})

console.log(firstRepublican.president)
// Add your code above this line

/** added for formatting purposes **/
console.log('');
console.log('-----------------')

/***********
Problem 7:

1. Using the `presidents` array, return a
list of the presidents who served less than 4 years
in office. Save the data in a variable
called `shortTermPresidents`, declared with const

2. Print `shortTermPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 7:')

// Add your code below this line
const shortTermPresidents = presidents.filter(function (shortPresidentialTerms) {
  const tookOffice = parseInt(shortPresidentialTerms.took_office)
  const leftOffice = parseInt(shortPresidentialTerms.left_office)

  if (leftOffice - tookOffice < 4) {
    return shortPresidentialTerms
  }
})

console.log(shortTermPresidents)
// Add your code above this line

/** added for formatting purposes **/
console.log('');
console.log('-----------------')