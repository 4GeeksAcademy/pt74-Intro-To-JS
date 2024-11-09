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
  // We can make an array of text, and use the `join` method that exists on Arrays.
  let arrStr = ["This", "is", "text", "that", "has", "been", "joined."].join(
    " "
  );

  // console.log(arrStr);

  // You can use this to assemble html nicely!
  // console.log(["<h1>", "hello world", "</h1>"].join(""));

  /**
   * Numbers!
   * A way to store numeric data.
   */
  let someNumber = 90210;
  let someInt = 1123581321;
  let someFloat = 3.141592;

  // BigInts let you store really big numbers, but are more restrictive.
  let someBigInt = 1000000000000000000000000000n;
  // console.log(someBigInt / 3n);

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

  let someExpr = "10" === 10; // This expression evaluates as false.

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
    {
      title: "The Ultimate Hitchiker's Guide To The Galaxy",
      author: "Douglas Adams",
      num_pages: 815,
      year_published: 2002,
      isbn13: "978-0-645-45374-7",
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

  // Plus can add numbers or concatenate strings.
  let plus = 10 + 10; // This will equal 20.
  plus = "This first string " + "has been concatenated with this other string.";
  // console.log(plus);
  let min = 10 - 10; // This will equal 0.
  let mul = 10 * 10; // This will equal 100.
  let div = 10 / 10; // 1
  let pow = 10 ** 10; // 10000000000
  let modulo = 10 % 3; // 1

  /**
   * Iteration
   * Allows you to run the same code on multiple things.
   */

  // console.log(
  //   `The book ${library[0].title}, by ${library[0].author} is a really good read.`
  // );
  // console.log(
  //   `The book ${library[1].title}, by ${library[1].author} is a really good read.`
  // );
  // console.log(
  //   `The book ${library[2].title}, by ${library[2].author} is a really good read.`
  // );

  // For of loop:
  // for (const book of library) {
  //   console.log(
  //     `The book ${book.title}, by ${book.author} is a really good read.`
  //   );
  // }

  // Old-style for loops:
  // for (let i = 0; i < library.length; i++) {
  //   console.log(
  //     `The book ${library[i].title}, by ${library[i].author} is a really good read.`
  //   );
  // }

  // While loops:
  // let someCondition = true;
  // let oops = 0;
  // while (someCondition) {
  //   console.table(library);

  //   oops++;
  //   if (oops > 25) {
  //     someCondition = false;
  //   }
  // }

  /**
   * Functions
   * Let you define or name behavior that you want to use.
   */

  // Function keyword:
  function printLibraryBook(book) {
    console.log(
      `The book ${book.title}, by ${book.author} is a really good read.`
    );
  }

  function helloWorld() {
    console.log("HELLO WORLD.");
  }

  // for (const novel of library) {
  //   printLibraryBook(novel);
  // }

  // Anonymous/Arrow function:
  const fibonacci = (x) => {
    let prev = 0n;
    let curr = 1n;

    for (let i = 0; i < x; i++) {
      let temp = curr;
      curr = prev + curr;
      prev = temp;
    }

    return curr;
  };

  /**
   * Generator functions let us iterate over a function.
   */
  const fibGen = function*(n = 15) {
    let prev = 0n;
    let curr = 1n;

    for (let i = 0; i < n; i++) {
      let temp = curr;
      curr = prev + curr;
      prev = temp;

      yield prev;
    }
  };

  // console.log(fibonacci(100));

  // for (const fib of fibGen()) {
  //   console.log(fib);
  // }

  // Return allows us to get data out of functions.
  // let bigFib = fibonacci(1000);
  // console.log("The return value of fibonacci(1000):", bigFib);
  // let libraryStuff = printLibraryBook(library[0]);
  // console.log("The return value of printLibraryBook:", libraryStuff);

  // Arrow functions don't need returns if you don't use squiggly braces!
  // console.log(
  //   library.map((book) => {
  //     return `The book ${book.title}, by ${book.author} is a really good read.`;
  //   })
  // );

  // Arrow or anonymous functions support implicit returns.
  // console.log(
  //   library.map(
  //     (book) =>
  //       `The book ${book.title}, by ${book.author} is a really good read.`
  //   )
  // );
};
