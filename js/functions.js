function welcome(name){
  console.log(`Hello ${name}`);
}
welcome("Michaela");

// let greetingName = "Michaela";

// const welcome = name => console.log(`Hello ${name}`)

// Define a function printToTwenty() that will print the numbers from 0 to 20 to the console ( don’t forget we have to invoke/call the function to see it working )
function printToTwenty(){
  for(let i=0; i <= 20; i++){
    console.log(i)
  }
}
printToTwenty()

// ?
// Define a function printNumbers() that receives one argument and prints the numbers from 0 to whatever number we pass to it as an argument
function printNumbers(num){
  for(let i = 0; i <= num; i++){
    console.log(`${num}`);
  }
}
printNumbers(7);

// Define a function printArrElements(someArr) that will loop through array and print all the elements of that array. Use the following array to pass it as an argument to the function you’ve just defined:

let ironCities = ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo" ];

function printArrElements(someArr){
  for(let i = 0; i < someArr.length; i++){
    console.log(someArr[i]);
  }
}
printArrElements(ironCities);

// Define a function printEvens(someArr) and use the ironCities array and print only its even elements. 
function printEvens(someArr){
for(let i = 0; i < someArr.length; i++){
   if(i % 2 === 0){
    console.log(someArr[i]);
   }
 }
}
printEvens(ironCities);

// Define a function that will receive an array as an argument and calculate a sum of all its elements. Example, if we pass the following array to that function: const prices = [5, 7.99, 9.99, 0.99, 21], it should return 44.97 as output. How would you concatenate $ sign in front of the sum?
let prices = [5, 7.99, 9.99, 0.99, 21];

function sumAllElems(someArr){
   let sum = 0;
   for(let i = 0; i < someArr.length; i++){
     sum += someArr[i];
   }
  return sum;
}

console.log("$" + sumAllElems(prices));

// Define a function stringToLetters() that receives a string as an argument and returns an array of its letters.
function stringToLetters(name){
  return name.split("");
}
stringToLetters("Michaela")



// Define a function that will:
// count from 1 to 100,
// on numbers divisible with 4 print “Hey”,
// on numbers divisible with 6 print “There”,
// on numbers divisible with both 4 and 6 print “Ironhack”,
// skip numbers divisible with 7,
// on the number that represents your age add ! (ex. 34!).
function countToHundred(){
  for(let i = 1; i <= 100; i++){
    if ((i % 4 === 0) && (i % 6 === 0)){
      console.log("Ironhack");
    } else if (i % 4 === 0){
      console.log("Hey");
    } else if (i % 6 === 0){
      console.log("There");
    } else if (i % 7 === 0){
      continue;
    } else if (i === 36){
      console.log("36!");
    } else console.log(i);
  }
}


// Nested objects, create function to list the phone's properties
let phone = {
  brand: "apple",
  type: "iPhone",
  model: "X",
  characteristics: {
    capacity: "256 GB",
    size: {
      height: "5.65 inches",
      width: "2.79 inches",
      depth: "0.3 inches"
    }
  },
  chip: ["bionic", "neural engine", "embedded motion processor"]
}

function getPhoneDetails(thePhone){
  console.log(`${thePhone.type} ${thePhone.model} by ${thePhone.brand.toUpperCase()} has the following characteristics: 
  1. capacity: ${thePhone.characteristics.capacity},
  2. dimensions: ${thePhone.characteristics.size.height} x ${thePhone.characteristics.size.width} x ${thePhone.characteristics.size.depth}, as well as the chip specs:`);
 
  for(let i = 0; i < thePhone.chip.length; i++){
    console.log(`${i+1} - ${thePhone.chip[i]}`);
  }
}
 
getPhoneDetails(phone);

// The output after function invocation is:

// iPhone X by APPLE has the following characteristics: 
//   1. capacity: 256 GB,
//   2. dimensions: 5.65 inches x 2.79 inches x 0.3 inches, as well as the chip specs:
// 1 - bionic
// 2 - neural engine
// 3 - embedded motion processor