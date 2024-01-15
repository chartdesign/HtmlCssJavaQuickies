/**
 * @param {string} s
 * @return {number}
 */

/* 
Given a string s, find the length of the longest 
substring
 without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

-------- Chat GPT answer -------
To solve this problem in JavaScript, we can use a sliding window technique. The idea is to maintain a window of characters that does not contain any repeating characters and slide this window through the string. We can use a map or an object to keep track of the characters we've seen and their positions. Here's how you can implement it:

Initialize two pointers to indicate the start and end of the current window.
Iterate over the string, expanding the window by moving the end pointer.
If a character is repeated, move the start pointer to the right of the first occurrence of this character.
Calculate the length of the current window and update the maximum length if it's greater than the previous maximum.
*/

function lengthOfLongestSubstring(s) {
  let start = 0,
    maxLength = 0;
  let charMap = {};

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    if (charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    }

    charMap[currentChar] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Test the function with the given examples
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
