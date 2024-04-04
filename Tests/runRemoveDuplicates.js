import removeDuplicates from '../Tasks/removeDuplicates'

// Test cases
const inputArray1 = [1, 1, 2, 2, 3, 4, 4, 5];
const inputArray2 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];

console.log("New Length for inputArray1:", removeDuplicates(inputArray1)); // Output: 5
console.log("New Length for inputArray2:", removeDuplicates(inputArray2)); // Output: 4