// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/

//this is a factory function that takes diffrent arguments that best describe a computer and return an object out of them;
function makeComputer(brand, cpu, ram, storage, gpu) {
  // TODO: Your code here
  return {
    BRAND : brand,
    CPU : cpu,
    RAM : ram,
    STORAGE : storage,
    GPU : gpu
  }
}

// using the factory function we can create different computers an store them inside an array
var computer1 = makeComputer("Dell", "intel i5", "8 GB", "1 TB SATA HDD", "Nvidia GTX 1050TI");
var computer2 = makeComputer("Razer", "intel i7", "16 GB", "1 TB SSD", "Nvidia GTX 1060TI MAXQ");
var computers = [computer1, computer2]

// Write a function displayComputer that can be used to display one computer.

//this is a function that return a string discribing one computer
function displayComputer(computer) {
  // TODO: Your code here
  return "This computer's brand is " + computer["BRAND"] + ", it has an " + computer["CPU"] + " CPU, " 
  + computer["RAM"] + " of RAM, " + computer["STORAGE"] + " of storage and an " + computer["GPU"] + " graphics card"
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

//Using map we can create a new array with all the elements transformed to uppercase
function uppercaseAll(arrayOfStrings) {
  // TODO: your code here
  return map(arrayOfStrings, function(element){
    return element.toUpperCase();
  })
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

//Using filter we can check if the population of or countrys object is over 500 million, if it is over 500 million
//it will push it inside a new array and return it to us
var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

function highestPopulation(arrayOfObjects) {
  // TODO: your code here
  return filter(arrayOfObjects, function(element){
    return element["population"] > 500000000;
  })
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/

//Using map we can divide each element of our array and store the result inside a new array that is returned to us
function halveAll(numbers) {
  // your code is here
  return map(numbers, function(element) {
    return element / 2;
  })
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/

//Using map we can take the value of each element of our object and store it inside a new array that is returned to us
function values(obj) {
  // TODO: your code here
  return map(obj, function(element) {
    return element;
  })
}

//Good Luck :))
