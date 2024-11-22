const fibonacci = (number, memo = {}) => {
  if (Math.floor(number) !== number) {
    throw Error("We can't compute fractional fibonacci numbers!");
  }

  if (number < 0) {
    throw Error(
      "We can't compute negative fibonacci numbers with this function."
    );
  }

  if (number === 0) {
    return 0;
  }

  if (number <= 2) {
    return 1;
  }

  if (number in memo) {
    return memo[number];
  }

  memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);

  return memo[number];
};

const displayFib = (n) => {
  const fib = fibonacci(n);
  return `The ${n}th fibonacci number is ${fib}!`;
};

/**
 * Calculate the output of n for a given
 * FizzBuzz ruleset.
 *
 * @param {number} n
 */
const fizzBuzzSolver = (n) => {
  if (n % 15 === 0) {
    return "FizzBuzz";
  }

  if (n % 5 === 0) {
    return "Buzz";
  }

  if (n % 3 === 0) {
    return "Fizz";
  }

  return n;
};

const technicallyCorrect = (n) => {
  if (n === 15) {
    return "FizzBuzz";
  }

  if (n === 5) {
    return "Buzz";
  }

  if (n === 3) {
    return "Fizz";
  }

  return n;
};

module.exports = {
  fibonacci,
  displayFib,
  fizzBuzzSolver,
  technicallyCorrect,
};
