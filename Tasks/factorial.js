// Question no: 3

// 3. Recursion Question: Factorial
// Question: Write a recursive function to find the factorial of a non-negative integer n.
// Explanation:
// The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// Base case: If n is 0 or 1, return 1 (the factorial of 0 and 1 is 1).
// Recursive step: Multiply n by the factorial of n - 1 (i.e., n * factorial(n - 1)).
// Example Input:
// n = 5
// Answer:
// Factorial of 5: 120
// Test Input:
// n = 10



function factorial(n) {
    // Base case: If n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive step: Multiply n by factorial of n - 1
    return n * factorial(n - 1);
}

// Test case
//const n = 5;
//console.log("Factorial of", n + ":", factorial(n)); // Output: Factorial of 5: 120
