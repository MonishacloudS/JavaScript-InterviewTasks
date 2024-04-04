// 4. Rotate Array
// Question: Given an array and an integer k, rotate the array to the right by k steps.
// Explanation:
// Given an array and an integer k, we want to move the last k elements of the array to the front.
// We can achieve this by performing the following steps:
// ● Reverse the entire array.
// ● Reverse the first k elements.
// ● Reverse the remaining elements.
// Example Input:
// Input Array: [1, 2, 3, 4, 5, 6, 7]
// k = 3
// Answer:
// Rotated Array: [5, 6, 7, 1, 2, 3, 4]
// Test Input:
// Input Array: [3, 8, 9, 2, 5]
// k = 2


function rotateArray(nums, k) {
    
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
            start++;
            end--;
        }
    };
    
    const n = nums.length;
    k %= n; 
    
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
    
    return nums;
}

// Test case
// const inputArray = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// console.log("Rotated Array:", rotateArray(inputArray, k)); // Output: Rotated Array: [5, 6, 7, 1, 2, 3, 4]

// Test case
// const inputArray2 = [3, 8, 9, 2, 5];
// const k = 2;
// console.log("Rotated Array:", rotateArray(inputArray2, k)); // Output: Rotated Array: [2, 5, 3, 8, 9]

