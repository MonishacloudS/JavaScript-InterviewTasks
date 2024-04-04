// Question no:2

// 2: Remove Duplicates
// Question: Given a sorted array, remove the duplicates in-place such that each element appears only
// once and returns the new length.

// Explanation:
// Start with two pointers, i and j, initially pointing to the first two elements of the array.
// Iterate through the array with the pointer j, comparing each element with the element at index i.
// If the element at index j is different from the element at index i, increment i and update the element at
// index i with the element at index j.
// Continue this process until j reaches the end of the array. The length of the array up to index i will be
// the new length without duplicates.

// Example Input:

// Input Array: [1, 1, 2, 2, 3, 4, 4, 5]
// Answer:
// New Length: 5

// Test Input:
// Input Array: [1, 1, 1, 2, 2, 3, 3, 3, 4, 5]


function removeDuplicates(nums) {
    if (nums.length === 0) return 0; 
    
    let i = 0; 
    
    for (let j = 1; j < nums.length; j++) {
        
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    // The new length will be the index i + 1
    return i + 1;
}

// Test cases
// const inputArray1 = [1, 1, 2, 2, 3, 4, 4, 5];
// const inputArray2 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];

// console.log("New Length for inputArray1:", removeDuplicates(inputArray1)); // Output: 5
// console.log("New Length for inputArray2:", removeDuplicates(inputArray2)); // Output: 4
