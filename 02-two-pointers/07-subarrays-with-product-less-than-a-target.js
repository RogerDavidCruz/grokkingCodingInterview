/*
Subarrays with product less than a target

Given an array of positive numbers and a positive target number, find all of its 
contiguous subarrays whose product is less than the target number.

Example 1: 
    Input: [2,5,3,10], target = 30
    Output: [2], [5], [2,5], [3], [5,3], [10]
    Explanation: There are six contiguous subarrays whose product is less than the target

Example 2:
    Input: [8,2,6,5], target = 50
    Output: [8], [2], [8,2], [6], [2,6], [5], [6,5]
    Explanation: There are seven contiguous subarrays whose product is less than the target

*/

/*
    Grokking - sliding window approach
*/

const findProductSubarrays = (arr, target) => {
    let result = [],
        product = 1,
        left = 0;
    
    for (right = 0; right < arr.length; right++) {
        product *= arr[right];

        while (product >= target && left < arr.length) { //sliding the window start
            product /= arr[left] //why? removing the start value by division
            left += 1 //move up the left pointer
        }

        const tempList = [];    //create the subarray temporarily
        
        //for loop
            //the i starts at right pointer position, 
            //moves as the right pointer moves in the above for loop
            //move as long as i is greater than left pointer - 1

        for (let i = right; i > left - 1; i--) {
            console.log(tempList, 'templist')
            tempList.unshift(arr[i]);   //add to the beginning of the array
            result.push([...tempList]);  //spread the templist values inside an array and push into result array
          }
    }
    return result;
}

console.log(findProductSubarrays([2,5,3,10], 30))
console.log(findProductSubarrays([8,2,6,5], 50))

/*
time: O(N^3) since O(N) for sliding window, and worst O(n^2) create subarrays
space: O(N^3) at most O(n^2) space for output list and each subarray can take O(n)

*/


/*
two pointers approach
    -the order of subarrays comes out different but same answer

Example:
    Input:
        [2,5,3,10], target = 30
    Output:
        [ [ 2 ], [ 2, 5 ], [ 5 ], [ 5, 3 ], [ 3 ], [ 10 ] ]
        [ [ 8 ], [ 8, 2 ], [ 2 ], [ 2, 6 ], [ 6 ], [ 6, 5 ], [ 5 ] ]

        i
   [2,5,3,10], target = 30
        j

1st for loop at i = 0      
product = 2
is product < target
    2 < 30, yes
res = [[2]]push into res

2nd for loop at j = 1
product = product * arr[j]
product = 2 * 5 = 10
is product < target, 10 < 30, yes
res = [[2], [2,5]] push into res

1st for loop at i = 1
product = 5
is product < target, 5 < 30, yes
res = [[2], [2,5], [5]] push into res

2nd for loop at j = 2
product = 5 * 3 = 15
is product < target, 15 < 30, yes
res = [[2], [2,5], [5], [[5,3]]] push into res

1st for loop at i = 2
product = 3
is product < target, 3 < 30, yes
res = [[2], [2,5], [5], [[5,3]], [3]]push into res

2nd for loop at j = 3
product = 3 * 10 = 30
is product < target, 30 < 30, no
don't push anything

1st loop with i = 3
product = 10
is product < target, 10 < 30, yes
res = [[2], [2,5], [5], [[5,3]], [3], [10]] push into res

          i
   [2,5,3,10], target = 30
           j
*/

const findSubarrays = (arr, target) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let product = arr[i]     //why? to track what to multiply to get product
        if (product < target) {
            res.push([product]);    
        } else {
            continue;
        }
        for (let j = i + 1; j < arr.length; j++) {
            product *= arr[j];
            if (product < target) {
                res.push([arr[i], arr[j]]) //why? push into result array the subset - to get whole subset
            }
        }
    }
    return res
}

/*
[ [ 2 ], [ 5 ], [ 2, 5 ], [ 3 ], [ 5, 3 ], [ 10 ] ]
[ [ 8 ], [ 2 ], [ 8, 2 ], [ 6 ], [ 2, 6 ], [ 5 ], [ 6, 5 ] ]

*/