/*
Order-argnostic binary search

Given a sorted array of numbers of numbers, find if a given number 'key' is present 
in the array. Though we know that the array is sorted we don't know if it's sorted
in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the 'key' if it is present in the array, 
otherwise return -1.

Example 1:  Input [4,6,10], key = 10
            Output: 2

Example 2:  Input: [1,2,3,4,5,6,7], key = 5
            Output: 4

Example 3:  Input: [10, 6, 4], key = 10
            Output: 0

Example 4:  Input: [10, 6, 4], key = 4
            Output: 2
    
Time:
Space:
*/

const binarySearch = (arr,key) => {
    let start = 0,
        end = arr.length - 1,
        isAscending = arr[start] < arr[end];
    
    while (start <= end) {
        mid = Math.floor(start + (end - start)/2);
        if (key === arr[mid]) {
            return mid;
        }

        if (isAscending) {
            if (key < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (key > arr[mid] - 1) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
}

console.log(binarySearch([4,6,10], 10)) //2
console.log(binarySearch([1,2,3,4,5,6,7], 5)) //4
console.log(binarySearch([10, 6, 4], 10)) //0
console.log(binarySearch([10, 6, 4], 4)) //2