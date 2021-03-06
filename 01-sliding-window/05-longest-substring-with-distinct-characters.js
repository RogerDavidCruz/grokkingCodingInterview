/*
Longest Substring With Distinct Characters
(aka Longest substring without repeating characters)

Given a string, find the length of the longest substring, which has all distinct characters.

Example 1:
  Input: String="aabccbb"
  Output: 3
  Explanation: The longest substring with distinct characters is "abc".

Example 2:
  Input: String="abbbb"
  Output: 2
  Explanation: The longest substring with distinct characters is "ab".

Example 3:
  Input: String="abccde"
  Output: 3
  Explanation: Longest substrings with distinct characters are "abc" & "cde".
*/

/*
Algorithm

grokking - the index were the last char last appeared
{'char' : index where end pointer char last seen } [then updated in each iteration]

       s
 "abcdeafjyk"
          e

Time: O(n) where n is all characters             
Space: O(m) where m is size of the hashmap
*/

const longestSubString = str => {
    let start = 0,
        maxLen = 0,
        charIdxMap = {};
  
    for (end = 0; end < str.length; end++) {
      const rightChar = str[end];
      if (rightChar in charIdxMap) {
        start = Math.max(start, charIdxMap[rightChar] + 1);
      }
      charIdxMap[rightChar] = end;
      maxLen = Math.max(maxLen, end - start + 1);  
    }
    return maxLen;
  }
  
console.log(longestSubString("aabccbb"), 'expecting: 3') //3
console.log(longestSubString("abbbb"), 'expecting: 2') //2
console.log(longestSubString("abcdeafjyk"), 'expecting: 9') //9