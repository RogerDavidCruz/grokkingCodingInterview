/*
Dutch National Flag

Given an array continuing 0s, 1s, and 2s sort the array in place. You should treat numbers
of the array as objects, hence, we can't count 0s, 1s, and 2s to recreate the array.

Example 1: 
    Input: [1,0,2,1,0] 
    Output: [0,0,1,1,2]

Example 2: 
    Input: [2,2,0,1,2,0]
    Output: [0,0,1,2,2,2]
*/

/*
define a low (left), high (right) pointers and i iterator pointer
iterate thr array with while loop as i less than (or equal) high pointer
    - the low pointer seeks 0s
    - the high pointer seeks 2s
    - the i iterator pointer seeks 1s
1) check if the element at i equals 0, then swap between low and array[i]
    increment low pointer
    increment i 
2) check if the element at i equals 2, then swap between high and array[i]
    decrement high pointer
3) else just increment i
return array
*/

const dutchFlag = arr => {
    let low = 0,
        high = arr.length - 1,
        i = 0;

    while (i <= high) {
        if (arr[i] === 0) {
            [arr[low], arr[i]] = [arr[i], arr[low]];
            low++;
            i++;
        } else if (arr[i] === 2) {
            [arr[high], arr[i]] = [arr[i], arr[high]];
            high--;
        } else {
            i++;
        }
    }
    return arr;
}

console.log(dutchFlag([1,0,2,1,0])) //[0,0,1,1,2]
console.log(dutchFlag([2,2,0,1,2,0])) //[2,2,0,1,2,0]


//another approach checking for arr[i] === 1, then move just the i iterator

const dutchFlagSort = arr => {
    let low = 0,
        high = arr.length - 1,
        i = 0;

    while (i < high) { 
        if (arr[i] === 0) {
            [arr[i], arr[low]] = [arr[low], arr[i]];
            i += 1;
            low += 1;
        } else if (arr[i] === 1) {
            i += 1;
        } else {
            [arr[i], arr[high]] = [arr[high], arr[i]]
            high -= 1
        }
    }
    return arr;
}