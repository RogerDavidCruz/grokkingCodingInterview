/*
Longest Substring with maximum K Distinct Characters (medium)

Problem Statement#
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

Example 4:

Input: String="cbbebi", K=10
Output: 6
Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".


*/



/*
declare variables for map frequency of characters, start, maxlength
iterate through the string and check if we have seen the character against the map
if number of keys of the hashmap is greater than k
calculate the hashmap keys, maxlength, and we continue slide the window
return maxlength

time: O(n)
space: 0(m) 
*/

const longestSubstringMaxKDistinct = (arr, k) => {
    let start = 0,
      map = {},
      maxLength = 0;
  
    for (end = 0; end < arr.length; end++) {
      
      if (!(arr[end] in map)) {
        map[arr[end]] = 1
      } else {
        map[arr[end]] += 1
      }
  
      while (Object.keys(map).length > k) {
        map[arr[start]] -= 1
        if (map[arr[start]] === 0) {
          delete map[arr[start]]
        }
        start++
      }
  
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  
  console.log(longestSubstringMaxKDistinct("araaci", 2)) // 4
  console.log(longestSubstringMaxKDistinct("araaci", 1)) //2
  
  /*
  "aaaaaaaraaci", K=1
          ||
  map: {r': 1}
  */