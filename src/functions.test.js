const {
  fibonacci,
  displayFib,
  fizzBuzzSolver,
  technicallyCorrect,
} = require("./functions.js");

test("Make sure that displayFib works for sensible numbers", () => {
  expect(displayFib(0)).toBe("The 0th fibonacci number is 0!");
  expect(displayFib(1)).toBe("The 1th fibonacci number is 1!");
  expect(displayFib(3)).toBe("The 3th fibonacci number is 2!");
});

test("Make sure that displayFib errors on invalid arguments", () => {
  expect(() => displayFib("This isn't a number")).toThrow();
  expect(() => displayFib(-1)).toThrow();
});

test("Make sure FizzBuzz 3/5 works correctly.", () => {
  expect(fizzBuzzSolver(2)).toBe(2);
  expect(fizzBuzzSolver(3)).toBe("Fizz");
  expect(fizzBuzzSolver(5)).toBe("Buzz");
  expect(fizzBuzzSolver(15)).toBe("FizzBuzz");
});

test("Make sure technicallyCorrect 3/5 works correctly.", () => {
  // Technically correct is unfortunately the best kind of correct.
  expect(technicallyCorrect(2)).toBe(2);
  expect(technicallyCorrect(3)).toBe("Fizz");
  expect(technicallyCorrect(5)).toBe("Buzz");
  expect(technicallyCorrect(15)).toBe("FizzBuzz");
});
