/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp");

// What’s Wrong? -- SYNTAX -- needed closing quotation and parenthesis. Also needed semi-colon.

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "8"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong? LOGIC -- Cannot convert String "eight" into a number. So it logs NaN. Fix is to use a number there, or the string "8".

// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false; //number less than one =  false (not prime)
  for (let i = 2; i < num; i++) {
    // apparently this is a loop.  so, i=2 to START with; 2<number (check that num is greater than i - if it is keep going up to num); starting at 2, check numbers increasing in value by 1 IN the if section
    if (num % i === 0) {
      //This is inside the loop --  so if the remainder of num/i is strictly equal to "0" - that means it IS divisible by that number so that means it is NOT prime. SO
      return false; // Supposed to indicate num is NOT prime ---- BUT if this says true when the number is divisible by i then it is backwards from what it needs to be. so this should be false.
    }
  }
  return true; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong?
//the true and the false of the loop were reversed.
