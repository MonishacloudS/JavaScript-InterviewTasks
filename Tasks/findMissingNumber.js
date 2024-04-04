// Question no:1

// 1: Find Missing Number
// Question: Given an array of integers from 1 to n with one missing number, find the missing number.

// Explanation:
// One approach is to calculate the sum of integers from 1 to n using the formula (n * (n + 1)) / 2.
// Then, iterate through the given array and calculate the sum of all elements.
// The missing number can be found by subtracting the sum of array elements from the sum of integers
// from 1 to n.

// Example Input:
// Input Array: [1, 2, 3, 4, 6, 7, 8]
// Answer:
// Missing Number: 5

// Test Input:
// Input Array: [1, 3, 4, 5, 6, 7, 8, 9, 10]


function findMissingNumber(arr) {
    
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    
    const arrSum = arr.reduce((sum, num) => sum + num, 0);
    
    const missingNumber = totalSum - arrSum;
    
    return missingNumber;
}

// // Test cases
// const inputArray1 = [1, 2, 3, 4, 6, 7, 8];
// const inputArray2 = [1, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("Missing Number for inputArray1:", findMissingNumber(inputArray1)); // Output: 5
// console.log("Missing Number for inputArray2:", findMissingNumber(inputArray2)); // Output: 2
