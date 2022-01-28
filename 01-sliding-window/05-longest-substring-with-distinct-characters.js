



//grokking - the index were the last char last appeared

// {'char' : idex where end pointer char last scene } u[dated in each iteration]



const longestSubString = string => {
    let start = 0,
        maxLength = 0,
        charIdxMap = {};
  
    for (end = 0; end < string.length; end++) {
        const rightChar = string[end];
      if (rightChar in charIdxMap) {
        windowStart = Math.max(windowStart, charIdxMap[right] + 1)
      } 

      charIdxMap[rightChar] = windowEnd;

      maxLength = Math.max(maxLength, end - start + 1);  
    }
  
    return maxLength;
  }
  //       s
  // "abcdeafjyk"
  //             e
  
  console.log(longestSubString("aabccbb")) //3
  console.log(longestSubString("abbbb")) //2
  console.log(longestSubString("abcdeafjyk")) //9