// alert("I'm JavaScript!")

"use strict";

// let admin, name;

// name = "John";

// admin = name;

// alert( admin );

let ourPlanetName = "Earth";
let currentUserName = "John";

// const BIRTHDAY = '18.04.1982';

// const AGE = someCode(BIRTHDAY);

let name1 = "Ilya";

// alert( `hello ${1}` );
// alert( `hello ${"name"}` );
// alert( `hello ${name1}` );

let a = 1,
  b = 1;

// alert( ++a );
// alert( b++ );

// alert( a );
// alert( b );

let a1 = 2;

let x = 1 + (a1 *= 2);
console.log(x);

// 1. "" + 1 + 0 = "10"
console.log("" + 1 + 0); // Output: "10"

// 2. "" - 1 + 0 = -1
console.log("" - 1 + 0); // Output: -1

// 3. true + false = 1
console.log(true + false); // Output: 1

// 4. 6 / "3" = 2
console.log(6 / "3"); // Output: 2

// 5. "2" * "3" = 6
console.log("2" * "3"); // Output: 6

// 6. 4 + 5 + "px" = "9px"
console.log(4 + 5 + "px"); // Output: "9px"

// 7. "$" + 4 + 5 = "$45"
console.log("$" + 4 + 5); // Output: "$45"

// 8. "4" - 2 = 2
console.log("4" - 2); // Output: 2

// 9. "4px" - 2 = NaN
console.log("4px" - 2); // Output: NaN

// 10. "  -9  " + 5 = "  -9  5"
console.log("  -9  " + 5); // Output: "  -9  5"

// 11. "  -9  " - 5 = -14
console.log("  -9  " - 5); // Output: -14

// 12. null + 1 = 1
console.log(null + 1); // Output: 1

// 13. undefined + 1 = NaN
console.log(undefined + 1); // Output: NaN

// 14. " \t \n" - 2 = -2
console.log(" \t \n" - 2); // Output: -2

let a5 = "1"; // prompt("First number?", 1);
let b5 = "2"; // prompt("Second number?", 2);

alert(a5 + b5); // 12

// 5 > 4 → true
console.log(5 > 4); // Output: true

// "apple" > "pineapple" → false
console.log("apple" > "pineapple"); // Output: false

// "2" > "12" → true
console.log("2" > "12"); // Output: true

// undefined == null → true
console.log(undefined == null); // Output: true

// undefined === null → false
console.log(undefined === null); // Output: false

// null == "\n0\n" → false
console.log(null == "\n0\n"); // Output: false

// null === +"\n0\n" → false
console.log(null === +"\n0\n"); // Output: false

let value = prompt('What is the "official" name of JavaScript?', "");

if (value == "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? ECMAScript!");
}

let value1 = prompt("Type a number", 0);

if (value1 > 0) {
  alert(1);
} else if (value1 < 0) {
  alert(-1);
} else {
  alert(0);
}
let result;

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
alert(1 && null && 2);
alert(alert(1) && alert(2));
alert(null || (2 && 3) || 4);
if (!(age >= 14 && age <= 90)) {
  console.log("gogoogo");
}
if (-1 || 0) alert("first");
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third");

let userName = prompt("Who's there?", "");

if (userName === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
let str = "Hello";

str.test = 5; // (*)

alert(str.test);

let a41 = +prompt("The first number?", "");
let b41 = +prompt("The second number?", "");

alert( a41 + b41 );
alert( 1.35.toFixed(1) ); // 1.4


function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);



let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );


function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); 

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str) {
  return +str.slice(1);
}


let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4


let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}



function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );


function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0





function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

let arrah = [5, 3, 8, 1];

let filtered = filterRange(arrah, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arrah ); // 5,3,8,1 (not modified)



function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arrag = [5, 3, 8, 1];

filterRangeInPlace(arrag, 1, 4); // removed the numbers except from 1 to 4

alert( arrag ); // [3, 1]



function copySorted(arr) {
  return arr.slice().sort();
}

let arraa = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arraa );



function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary


let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));


function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let johnaf = { name: "John", age: 25 };
let peteaf = { name: "Pete", age: 30 };
let maryaf = { name: "Mary", age: 28 };

let arraf = [ peteaf, johnaf, maryaf ];

sortByAge(arr);

// now sorted is: [john, mary, pete]
alert(arraf[0].name); // John
alert(arraf[1].name); // Mary
alert(arraf[2].name); // Pete


function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O



function unique(arr) {
  return Array.from(new Set(arr));
}


function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arraz = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arraz) );


function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arrac = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arrac) );

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

function topSalary(salaries) {

  let maxSalary = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

//new Date(datastring)
let d2 = new Date("2012-02-20T03:12");
alert( d2 );
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );  

function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}


function getSecondsToTomorrow() {
  let now = new Date();

  // tomorrow date
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now; // difference in ms
  return Math.round(diff / 1000); // convert to seconds
}

function formatDate(date) {
  let diff = new Date() - date; // the difference in milliseconds

  if (diff < 1000) { // less than 1 second
    return 'right now';
  }

  let sec = Math.floor(diff / 1000); // convert diff to seconds

  if (sec < 60) {
    return sec + ' sec. ago';
  }

  let min = Math.floor(diff / 60000); // convert diff to minutes
  if (min < 60) {
    return min + ' min. ago';
  }

  // format the date
  // add leading zeroes to single-digit day/month/hours/minutes
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // take last 2 digits of every component

  // join the components into date
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.2016 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );


let usera = {
  name: "John Smith",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(usera));


let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));
