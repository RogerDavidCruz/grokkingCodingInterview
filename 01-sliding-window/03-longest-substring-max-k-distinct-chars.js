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

const longestSubstringWithKDistinct = (str, k) => {
    let start = 0,
    freqMap = {},
    maxLength = 0; //this

    for (end = 0; end < str.length; end++) {
        const rightChar = str[end]
        if (!(rightChar in freqMap)) {
            freqMap[rightChar] = 1 
        } else {
            freqMap[rightChar] += 1
        }

        while (Object.keys(freqMap).length > k) { //this
            const leftChar = str[start];
            freqMap[leftChar] -= 1; // as window slided you decrease char frequency
            if (freqMap[leftChar] === 0)  {
                delete freqMap[leftChar]
            }
            start++                              //this
        }

        maxLength = Math.max(maxLength, end - start + 1)    
    }

    return maxLength;                               //this
  }
  
  console.log(longestSubstringWithKDistinct("araaci", 2)) // 4
  console.log(longestSubstringWithKDistinct("araaci", 1)) // 2
  console.log(longestSubstringWithKDistinct("cbbebi", 3)) // 5
  console.log(longestSubstringWithKDistinct("cbbebi", 10)) // 6
  
  /*
  "aaaaaaaraaci", K=1
          ||
  map: {r': 1}
  */
