// 1.	Create a function, inside the function add a second function, and again add a third function into the second function.
function one() {
  console.log("I am function one");
  function two() {
    console.log("I am function two");
    function three() {
      console.log("I am function three");
    }
  }
}

one();

// 2.	Create 3 variables.

const name = "Ben";
const age = 34;
const job = "farmer";

// 3.	Define 3 the variables in the correct place so that:
//  a.	The first variable is accessible inside every function.
//  b.	The second variable is accessible inside the second and third function only.
//  c.	The third variable is accessible inside the third function only.

function one() {
  const name = "Ben";
  console.log(`His name is ${name}.`);
  function two() {
    const age = 34;
    console.log(`${name} is ${age}.`);
    function three() {
      const job = "farmer";
      console.log(`${name} is ${age} and a ${job}.`);
    }
    three();
  }
  two();
}

one();

// 4.	Define a 4th variable inside the 3rd function. This variable should be accessible by every function

function one() {
  const name = "Ben";
  console.log(`His name is ${name}`);
  function two() {
    const age = 34;
    console.log(`${name} is ${age}.`);
    function three() {
      hobby = "running";
      const job = "farmer";
      console.log(`${name} is ${age} and a ${job}.`);
    }
    three();
  }
  two();
  console.log(`His hobby is ${hobby}`);
}

one();

// 5.	Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope

function one() {
  const name = "Ben";
  console.log(`His name is ${name}.`);
  function two() {
    const age = 34;
    console.log(`${name} is ${age}.`);
    function three() {
      hobby = "runner";
      const job = "farmer";
      console.log(`${name} is ${age} and a ${job}.`);
      {
        const country = "UK";
      }
    }
    three();
  }
  two();
}

one();

// 6.	Create an object which contains a function which console.logs this.something, where something is any name you like
const obj = {
  firstName: "Wednesday",
  lastName: "Adams",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(obj.fullName());

// 7.	Create an object which contains a variable which has the same name as you used above
const obj2 = {
  firstName: "Sherlock",
  lastName: "Holmes",
};

// 8.	Use call to send the object to the function, forcing the function to use the this you sent it
console.log(obj.fullName.call(obj2));

// 11.   Create a timer than console.logs a message after 5 seconds
setTimeout(function () {
  console.log(`5 seconds have passed`);
}, 5 * 1000);

// 12.   Create a timer than consoles.logs a message every 5 seconds
var i = 5;

var intervalId = setInterval(function () {
  if (i === 50) {
    clearInterval(intervalId);
  }
  console.log(`${i} seconds have passed`);
  i += 5;
}, 5000);

// 13.   Use a try/catch block to ensure you understand the syntax
try {
  console.log(lalala);
} catch (err) {
  console.log("sorry, your code does not work");
}
// This works now, but if I put function() in the try area, I would not get the "sorry, your code does not work", but SyntaxError: Function statements require a function name. Is that node helping? Same if I put in the code from task 12 without the var i = 5, it gives me ReferenceError: i is not defined, instead of "sorry, your code does not work"

// just playing around
// function calculator(func, x, y) {
//   if (func === "add") {
//     return x + y;
//   } else if (func === "subtract") {
//     return x - y;
//   } else if (func === "multiply") {
//     return x * y;
//   } else if (funx === "divide") {
//     return x / y;
//   } else {
//     return "do not understand";
//   }
// }

// console.log(calculator("subtract", 2, 4));
