/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  /**
   * Variables
   * A way to give data a name
   */
  let someVar = "this is a variable!";
  const someConst = "This variable can't be changed.";

  /**
   * Strings
   * A way to store text.
   */
  let someStr = "A string is a data type that is text.";
  someStr = 'This is also a "string".';
  let someStrLiteral = `This is still a string,
  but I can put break returns or "" and even ''
  in this without issue.`;
  let someFmtStr = `This is an interpolated value: ${2 ** 8}`;

  let concatStr = "This is the " + "end of the script " + "as we know it.";

  /**
   * Numbers!
   * A way to store numeric data.
   */
  let someNumber = 90210;
  let someInt = 1123581321;
  let someFloat = 3.141592;

  // Floats are not perfect, but they are pretty good.
  // console.log("Floats are not dense:", 0.1 + 0.2 === 0.3);

  // There are some useful constants:
  // console.log("Pi:", Math.PI);
  // console.log("E:", Math.E);

  /**
   * Booleans!
   * Are a binary value, always true or false.
   */
  let someTruth = true;
  let someFalse = false;

  let someExpr = "10" === 10;

  /**
   * Nullish values
   * A way to represent nothingness.
   */

  let someNull = null;
  let someUndefined = undefined;

  /**
   * Arrays
   * A way to store iterable data
   */

  // The first 10 fibonacci numbers:
  let someArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  // You can access or assign values with square bracket notation:
  // console.log(someArray[5]);

  /**
   * Objects
   * A way to store related data.
   */
  let someObj = {
    title: "Something Wicked This Way Comes",
    author: "Ray Bradbury",
    num_pages: 293,
    year_published: 1997,
    isbn13: "978-0-380-72940-1",
    isbn10: "0-380-72940-7",
    is_awesome: true,
    good_chapters: [
      `Chapter 31 - "Nothing much else happened, all the rest of that night."`,
    ],
  };

  let library = [
    // someObj,
    {
      title: "Something Wicked This Way Comes",
      author: "Ray Bradbury",
      num_pages: 293,
      year_published: 1997,
      isbn13: "978-0-380-72940-1",
      isbn10: "0-380-72940-7",
      is_awesome: true,
    },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      num_pages: 383,
      year_published: 1970,
      isbn13: null,
      isbn10: "0-380-01503-X",
      is_awesome: true,
    },
    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      num_pages: 470,
      year_published: 1992,
      isbn13: "978-061336162",
      isbn10: null,
      is_awesome: true,
    },
  ];

  // This can only really be used with arrays of objects:
  // console.table(library);

  /**
   * Operators!
   */
  // = --> assignation or assigning values
  let equality = "10" == 10; // This will be truthy.
  let strictEquals = "10" === 10; // This will be falsy.

  let inequality = "10" != 10; // This will be falsy.
  let strictNotEquals = "10" !== 10; // This will be truthy.

  let negate = !10; // This will be falsy.

  let lessThan = 5 < 10; // This will be truthy.
  let lte = 5 <= 10; // This will be truthy.
  let greaterThan = 10 > 5; // This will be truthy.
  let gte = 10 >= 5; // This will be truthy.
};
