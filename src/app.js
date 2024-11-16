/* eslint-disable */
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/**
 * Calculates the nth number in the fibonacci sequence.
 * (But it's written in a way to make future me angry.)
 *
 * @param {Number} n
 * @param {Object} m
 * @returns Number
 */
const f = (n, m = {}) => {
  if (n < 3) return 1;
  if (n in m) return m[n];

  m[n] = f(n - 1, m) + f(n - 2, m);

  return m[n];
};

// JSDoc
/**
 * Calculates the nth number in the fibonacci sequence.
 *
 * @param {Number} number
 * @param {Object} memo
 * @returns Number
 */
const fibonacci = (number, memo = {}) => {
  console.log("I was called with the number", number);

  // fibonacci numbers 1, 2 are both 1.
  if (number <= 2) {
    return 1;
  }

  // Instead of spawning n**2 function calls,
  // we store previously-calulated results
  // using memoization.
  if (number in memo) {
    return memo[number];
  }

  memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);

  return memo[number];
};

window.onload = function() {
  console.log(fibonacci(25));
};
