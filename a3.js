// Hello and welcome to A3!
// This assignment is an interactive assignment designed to teach you more about JavaScript!
// Ground Rules:
// 1. Don't edit outside the comments!
// 2. All explanations (unless otherwise specified in comments) should be submitted in a separate
//    explanations.txt with each response *labeled*  with the question number.
// 3. We're human ~ if you think there is a mistake in this assignment please make a Piazza post
//    and we'll sort it out.
// run `node a3.js` to begin!

/*
 * PROBLEM 1
 * a) Create ES6 classes which satisfy the function p1()
 * b) Explain this line: "Object.getPrototypeOf(dog.constructor) === Animal"
 *    - You must reference Object.getPrototypeOf, dog, constructor, ===, and Animal
 *    - hint: keep in mind the "constructor" property of an instance is always equal to the class
 *            if "const clazz = new Clazz()" then we know "(clazz.constructor === Clazz) === true"
 */

const problemFns = {};

{
  /* Start Your P1 Code Here */

  /* End Your P1 Code Here */

  function p1() {
    const dog = new Dog();

    if (Object.getPrototypeOf(dog.constructor) === Animal) {
      console.log("p1 works!");
    } else {
      console.log("p1 isn't working quite right.");
    }
  }
  problemFns.p1 = p1;
}

/**
 * PROBLEM 2
 * Create a function that uses the numbers array and returns an array of the numbers but with 1998 added to them.
 * Use an arrow function that does not have curly braces (and hence just returns the next line without needing the return word)
 * Use the JavaScript map function.
 * Store your resulting array in the added variables.
 */
{
  const numbers = [0, 2, -1998];
  
  // Begin your code here

  let added = [];

  // End your code here

  function p2() {
    if (added[0] === 1998 && added[1] === 2000 && added[2] === 0) {
      console.log("p2 works!");
    } else {
      console.log("p2 doesn't work!");
    }
  }

  problemFns.p2 = p2;
}

/*
 * PROBLEM 3
 * a) Fix the common programming error in the code below.
 * b) Explain step-by-step (1-2 sentences) why this bug occurs, how you fixed it, and what your solution does instead.
 */
{
  /* P3 editing starts here! */

  const P3 = {
    get_message(send_message) {
      this.x = "Problem 3 works!";

      setTimeout(function() {
        send_message(this.x);
      }, 100);
    }
  };

  /* P3 editing ends here! */

  function p3() {
    P3.get_message(function(message) {
      if (message != null) {
        console.log("p3 works!");
      } else {
        console.log("p3 isn't getting the message!");
      }
    });
  }
  problemFns.p3 = p3;
}

/*
 * PROBLEM 4
 * Answer the questions below!
 */

{
  problemFns.p4 = function() {
    /* p4 work starts here */

    let b;
    console.log(b); // null or undefined?
    //[YOUR ANSWER]
    b = {}; // What could you write in one line using b to output undefined?
    // [YOUR ANSWER]
    null == undefined; // True or False? Why?
    // [YOUR ANSWER]
    null === undefined; // True or False? Why?
    // [YOUR ANSWER]
    5 == "5"; // True or False? Why? What can you do to make it not true or false (whichever you chose)?
    // [YOUR ANSWER]

    // When you are done with your above answers set this to true.

    let done = false;

    /* p4 work ends here */

    console.log(`p4 is ${done === true ? " working" : "not done"}!`);
  };
}

/*
 * PROBLEM 5
 * a) changeFive is a function taking two parameters: a number `num` and boolean (true/false value) `increase`.
 * if `increase` is positive, you double it and if it's negative you halve it. We've written the function below
 * for you already, but didn't use ES6 JavaScript syntax. Rewrite the function in changedNumFixed following these instructions:
 * 1. You'll have to change how the function is declared since you shouldn't be using var.
 * 2. Similarly, change the declaration of the function so it's an ES6 arrow function.
 * 3. Don't simplify the number of if statements, but change the type of the "newNum" variable so it's not var and make any
 * other changes so changing the type doesn't break the function. (Hint: Think "block-scope")
 * 4. Change the if statement to not include any equals signs. (Hint: https://www.sitepoint.com/javascript-truthy-falsy/)
 */

{
  var changeNum = function(num, increase) {
    if (increase == true) {
      var newNum = num * 2;
    } else {
      var newNum = num / 2;
    }
    return newNum;
  };

  /* Your p5 work starts here! */
  var changeNumFixed = function(num, increase) {
    
  }; 
  /* Your p5 work ends here! */

  function p5() {
    if (changeNumFixed(5, true) === 10 && changeNumFixed(5, false) === 2.5) {
      console.log(
        "p5 is functioning but to get any credit you have to make sure you're using ES6 syntax in the chageNumFixed!"
      );
    } else {
      console.log("The p5 function isn't outputting the correct values");

      console.log("printing correct p5 values...");
      console.log(`   > ${changeNum(5, true)}`); //prints 10;
      console.log(`   > ${changeNum(5, false)}`); //prints 2.5;
    }
  }

  problemFns.p5 = p5;
}

/*
 * PROBLEM 6
 * a) Fix the common programming errors in the code below.
 * b) Read this wonderful, though older (pre ES6) article on hoisting: https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
 * c) Currently, loopity_loop always returns false.
 *    Ensure it always returns true given your new understanding of variables in JavaScript.
 * d) Explain step-by-step (1-2 sentences each) why this these issues occur, how you fixed them, and why your version works properly.
 */

{
  /**
   * Loops through every word in an array, substitutes the replacement for the word, and prints
   * a modified string.
   *
   * @param {*} words - the words to form into a sentence.
   * @param {*} replacement - replacement word
   */
  function loopity_loop(words, replacement) {
    /* Your p6 work starts here! */
    for (var word in words) {
      var sentence = words.join(" ");
      var modified = sentence.replace(word, replacement);
      console.log(`   > ${modified}`);
    }
    /* Your p6 work ends here! */

    return (
      typeof word === "undefined" &&
      typeof sentence === "undefined" &&
      typeof modified === "undefined"
    );
  }

  function p6() {
    const words = ["I", "am", "looping", "using", "a", "for", "loop"];
    console.log("starting p6 output...");

    if (loopity_loop(words, "loop")) {
      console.log(
        "p6 definitely has at least one error fixed! Make sure the p6 output is correct, however. There is no automated test for this."
      );
    } else {
      console.log("p6 is not working!");
    }
  }
  problemFns.p6 = p6;
}

/**
 * PROBLEM 7
 * 1. Implement the getName() function so it returns the name of the full name of the student.
 * 2. Implement the declaration of the student const so it creates a new Student correctly with a first and last name.
 * If you're stuck, see this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
{
  class Student {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    getName() {}
  }

  problemFns.p7 = function() {
    const student = new Student("Ryan", "Rayn");
    console.log(`starting p7 output...`);
    console.log(`   > full name: ${student.getName()}`);

    if (
      typeof student.getName() === "string" &&
      student.getName() === "Ryan Rayn"
    ) {
      console.log("p7 is working! ");
    } else {
      console.log("p7 is not outputing the correct value.");
    }
  };
}

/*
 * PROBLEM 8
 * a) Implement a callback function to satisfy p2() calling Api.get_dataset
 *    - Using any for loop is not allowed (for, for...of, for...in)
 *    - You must demonstrate Array.prototype.map a.k.a. [].map
 *    - the given dataset is an array of numbers
 *    - shift_ascii will be needed
 *    - you must print out a single string constructed from the entire dataset (hint: take a look at the String standard library)
 *    - the ending phrase is alphabetic *only*
 * b) Explain step-by-step (1-2 sentences) how your call(s) to Array.prototype.map.
 */

{
  const https = require("https");

  const Api = {
    endpoint: "https://us-central1-trendswebdevsp19.cloudfunctions.net/a3",
    /**
     * Retrieves a dataset from the backend.
     * @param {*} callback - a callback accepting an error and the resulting data.
     */
    get_dataset(callback) {
      // Make a get request.
      const res = https.get(this.endpoint, function(msg) {
        let message_data = "";

        // Data comes in chunks, so we'll add it to an accumulator.
        msg.on("data", data => {
          message_data += data;
        });

        // Once we've received all our data, call the callback.
        msg.on("end", () => {
          callback(null, JSON.parse(message_data));
        });
      });

      res.on("error", err => {
        callback(err, null);
      });
    }
  };
  /**
   * Corrects charcodes. (hint: http://lmgtfy.com/?s=d&q=javascript+string+charcode)
   * @param {*} a a number representing a character
   */
  function shift_charcode(a) {
    return a + 32;
  }

  /* Your p9 Code Starts Here */

  /* Your p9 Code Ends Here */

  function p8() {
    Api.get_dataset(callback);
  }
  problemFns.p8 = p8;
}

/*
 * PROBLEM KARMA
 * a) Using *no semicolons* and utilizing every value of the passed array satisfy karma()
 *    - You are not allowed to "replace" any values in the array.
 */

{
  /**
   * Transforms an array of numbers into a single number.
   * @param {*} arr - an array of numbers
   */
  function operate(arr) {
    /* Karma code starts here! */
    /* Karma code ends here! */
  }

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function karma() {
    const result = operate(numbers);

    if (result === 111) {
      console.log("Karma is working!");
    } else {
      console.log("Karma does not have the right values!");
    }
  }
  problemFns.karma = karma;
}

const problems = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "karma"];

problems.forEach(function(v) {
  try {
    problemFns[v].call(this, []);
  } catch (err) {
    console.log(v + " encountered an error!");
  }
});

// NOTE: Karma is considered extra credit in this assignment! (it will boost your grade on *this* assignment)