// Longest Substring with Same Letters after replacement
// LC 424 - Sliding Window Technique

/*
Given a string with lowercase letters only, if you allowed to replace no more than k letters
with any letter, find the length of the longest substring having the same letters after 
replacement.

Example 1:
    Input: String = "aabccbb", k = 2
    Output: 5
    Explanation: Replace the two 'c' with 'b' to have the longest repeating substring 'bbbbb'
*/

const lengthOfLongestSubstring = (str, k) => {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0; // initilize to 0, then increase 1 to count its frequency
    }
    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightChar]
    );

    //shrinking the window and reducing char frequency accordingly to windowStart pointer
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      leftchar = str[windowStart];
      frequencyMap[leftchar] -= 1;
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

/*
Sliding window approach

Good questions to ask:
    - are there any edge cases I should consider such as a blank string or empty spaces or numbers?
            - REGEX for removing special characters: stringToReplace.replace(/[^\w\s]/gi, '')
            - REGEX for removing empty spaces: str.replace(/\s/g, '');

Algorithm 
    - hashmap for frequency of each letter
    - iterate through string to add one letter at time in the window
    - keep track of count of max repeat letter in any window (maxRepeatLetterCount)
    - at any time, we have a window with one letter repeating MaxRepeatLetterCount times, so replace remaining letters
            - if remaining letters are less than or equal to k, replace all
            - if more than k letters remain, shrink the window as we cannot replace more than k letters

Time: O(n) for n number of letters in the input string
Space: O(1) because 26 letters in english alphabet to store the letter's frequency in the hashmap,
            which O(26) is assumptotically equal to O(1)

NOTE: const rightChar inside loop for a string, but for the array problem with 1s and 0s, no rightChar variable
*/
