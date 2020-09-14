console.log("I am ready!");

//Iteration 1: Names and Input
const hacker1 = "Evgeny";
const hacker2 = "Michaela";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has 6 characters!");
} else if (hacker2.length > hacker1.length) {
  console.log(
    "Yoooo, the Navigator has the longest name, it has 8 characters!"
  );
} else console.log("What?! You both have equally long names!");

//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

//let hacker1Name = hacker1.split("");
//console.log(hacker1Name);

// let hacker1NameAllCapitals = "";
// for (i = 0; i < hacker1Name.length; i++) {
//   console.log(hacker1Name[i].toUpperCase().toString());
//   console.log(hacker1NameAllCapitals);
// }

let hacker1AllCapitals = "";

for (i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase().toString());
  console.log(hacker1AllCapitals);
}

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let hacker1NameReversed = hacker1
  .split("")
  .reverse("")
  .join("");
console.log(hacker1NameReversed);

//3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both got the same name?");
} else {
  console.log("I'm not sure what you want to do, guys.");
}

// Bonus Time!
// Generate 3 paragraphs. Store the text in a variable type of string.
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt id elit pulvinar viverra. Sed nulla ligula, posuere tempus urna a, venenatis tincidunt nisl. Etiam vestibulum egestas nunc, non egestas arcu fringilla malesuada. Etiam magna dui, tristique ut dui sit amet, varius auctor nulla. Praesent ac sem purus. Nullam vehicula lobortis blandit. Vestibulum rhoncus ante tempus libero placerat, eget volutpat velit viverra. Nullam bibendum lobortis mi, sed ultrices erat mattis id. Fusce nec ex nec justo vestibulum euismod. Integer tincidunt sit amet erat eu feugiat. Donec orci elit, posuere et sem et, dignissim egestas mauris.

Morbi id dui et massa volutpat commodo. Curabitur pretium tellus et justo commodo, vel cursus erat ornare. Aliquam ac eros a ipsum vulputate hendrerit sit amet sit amet neque. Donec justo augue, pretium nec mattis a, placerat quis nunc. Aliquam congue nulla et nulla gravida lacinia. Ut scelerisque, nisl eu finibus tincidunt, libero elit fermentum dui, sed dapibus erat leo eu nisl. Nam eget elit dapibus, elementum diam ut, pellentesque tortor. Etiam quis vulputate nisi, quis convallis turpis. Vivamus non nisl neque. Proin et neque auctor, dapibus dolor et, tempor metus. Proin convallis consectetur felis ut molestie. Aenean feugiat, lacus id condimentum malesuada, lacus nulla consequat mi, tempor tristique enim nunc ac ligula. Ut nec elit et dui lobortis rhoncus. In gravida congue metus, vitae sagittis lacus faucibus sed. Nulla blandit posuere velit et viverra. Cras convallis pulvinar velit vel tincidunt.

Aenean ultrices fringilla mi sed condimentum. Integer euismod, lectus vitae tincidunt porta, metus urna hendrerit tellus, nec fringilla mi metus a elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec quis orci placerat, auctor ante varius, finibus urna. Aenean nec volutpat sem, sit amet auctor nisi. Mauris scelerisque enim ut nulla fermentum, sed placerat diam tempus. Mauris ex tellus, viverra vel posuere at, luctus sed erat. Donec sollicitudin pretium convallis. Duis eros ex, efficitur quis mattis eu, mattis quis risus. Suspendisse id nunc ut metus mattis rutrum. Suspendisse pharetra non nulla in tristique. Integer quis venenatis nulla. Nullam odio nunc, pharetra elementum lorem ut, venenatis auctor lectus. Pellentesque rhoncus, quam non semper varius, nisl massa volutpat ante, in mollis massa tortor nec lorem.`;
console.log(loremIpsum);

// Make your program count the number of words in the string.
function wordCount(loremIpsum) {
  return loremIpsum.split(" ").length;
}
console.log(wordCount(loremIpsum));

// Make your program count the number of times the Latin word et appears.
let etWord = "et";
let countEtWord = loremIpsum.split(etWord).length - 1;
console.log(countEtWord);

// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
const clean = (str) => str.toLowerCase().replace(/[\W_]/g, "");
 
const isPalindrome = (str) => {
  const cleanStr = clean(str);
  for(let i = 0; i , cleanStr.length/2; i++) {
    if(cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]){
      return false;
    }
  }
  return true
}


// 1. initialize variable named "i" and  set its value to an empty string
// 2. remember, strings have property .lenght which tells us how long is the string (it's zero indexed)
// 3. as long as the length of the string is less or equal to 10, execute the code
// 4. in every iteration, add (+=) a star to the string
for (let i = ""; i.length <= 10; i += "*"){
  console.log(i);
}


//Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. Update the object with :

//the new property - discount and the corresponding value (7% or 10%) and the new price.
let product = {
  name: "headphones",
  price: 100,
  discount: 0
};

  if (product.price > 100) {
discount = ((product.price / 100) * 10);
product.price = (product.price - discount);
} else {
discount = ((product.price / 100) * 7);
product.price = (product.price - discount);
}
console.log (product.price);
console.log("Updated product:", product);


//Use given object and loop through its properties and if it has property “discount” print “Already discounted by…” and add the value (how much was the discount). In opposite case, do what you did in the previous exercise: check the price, depending on it (if it’s greater or lower than 100) add discount (10% or 7%) and add the property “discount” to the object.
//Note: To test, un-comment out line discount: "7%".
let prod = {
  name: "headphones",
  price: 83.7,
  discount: "7%",
};
let v

for (key in prod){
v = ("discount" in prod);
if (v = true) {
 console.log ("Already discounted by ",prod.discount) 
}
else if (product.price > 100) {
discount = ((product.price / 100) * 10);
product.price = (product.price - discount);
} else {
discount = ((product.price / 100) * 7);
product.price = (product.price - discount);
}
}    
console.log(prod);
// end result - case 1:
// { name: 'headphones', price: '77.84', discount: '7%' }

// end result - case 2:
// Already discounted by 7%.


// Using the given array of objects:

// display price of iPhone,
// display both phones’ names,
// add a new phone at the beginning of the array,
// remove the last element of the array

let products = [
  {
      name: "iPhone",
      price: 799.99
  },
  {
      name: "Samsung Galaxy S10",
      price: 900.00
  }
]

console.log(products[0].price);
console.log(products[0].name);
console.log(products[1].name);

let newPhone = {
name: "Motorola",
price: 400.00
}

products.unshift(newPhone);

console.log(products);

products.pop();

console.log(products)

//Given the array, print:
//your course type (full-time or part-time)
//the most familiar topic
//the least familiar topic
let course = {
  name: "Web Development",
  type: ["full-time", "part-time"],
  topics: ["HTML/CSS & Responsive Design", "JavaScript", "MongoDB", "Node", "Express", "React"]
};

console.log (course.type[0]);
console.log (course.topics[0]);
console.log (course.topics[4]);

//Given the object with nested objects in it, print:
let student = {
  firstName: "Ana",
  lastName: "Blair",
  course: {
    name: "Web Development",
    type: "part-time"
  },
  attendedIn: "Madrid",
  address: {
    street: "Happy Street",
    number: 123,
    city: "Barcelona",
    zip: 08015,
    country: "Spain"
  }
};

console.log(student.course.name);
console.log(student.address.street);
console.log("Ana moved from ",student.address.city," to ",student.attendedIn," to take ",student.course.type,student.course.name," course.")

//Given a 2D array, print the following:
const ironCampuses = [
  ["Mexico City", "Miami", "Sao Paulo"],
  ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
];

console.log(ironCampuses[0][1]); // => Miami
console.log(ironCampuses[1][0]); // => Amsterdam
console.log(ironCampuses[1][5]); // => Paris


//Framework sample:
let basic = {
  language: "JavaScript",
  frameworks: [
    {
      end: "back",
      list: [
        {
          name: "ExpressJS",
          released: 2010
        },
        {
          name: "MeteorJS",
          released: 2012
        }
      ]
    },
    {
      end: "front",
      list: [
        {
          name: "ReactJS",
          released: 2013
        },
        {
          name: "VueJS",
          released: 2014
        }
      ]
    }
  ]
};

// Let’s destructure a bit:

// the variable named basic has a type object, and it has two properties:
// language - type of string and
// frameworks - type of array
// frameworks is array of objects
// each object has two properties:
// end - type of string (back, front) and
// list - type of array
// list has two objects, and each has two properties: one type of string (name) and one type of number (released)

//Use the example from the lesson with frameworks to retrieve the following:
console.log(basic.frameworks[0].list[0].name); // => ExpressJS
console.log("In Ironhack, I'll learn",basic.frameworks[0].list[0].name," and ",basic.frameworks[1].list[0].name); // => In Ironhack, I'll learn ExpressJS and ReactJS.




// Define a function, name it however you prefer respecting the good naming conventions, loop through the array and print the type of each element of the array in the console.

const studentInfo = ["max", 34, true, {name: "sandra",
 student: true},
  ["javascript", "mongodb", "react"]];

console.log(studentInfo);

studentInfo.forEach(elem => {
  let theType = typeof elem;
  console.log(`The variable ${elem} is type of ${theType}`);
});




// Define a function checkProperty() that will use the following object passed as an argument to print the output in the console:
let property = {
  owner: {
    firstName: "John",
    lastName: "Doe",
    age: 44
  },
  isForSale: true,
  sqrm: 120,
  address: {
    street: "Happy St",
    number: 123,
    city: "Miami",
    state: "FL",
    country: "US"
  },
  amenities: ["pool", "tennis court", "private parking", "yard"]
}

function getCredentials(listing){
  if(property.isForSale = true){
    console.log(`${property.owner.firstName} ${property.owner.lastName} put the home for sale! The property has 4 amenities: ${property.amenities}`);
  } else {
    console.log("Property is not for sale.")
  }
}
getCredentials(property);
