/* Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests. */

function first_non_repeating_letter(str) {
  // Create a case-insensitive map to count character occurrences
  const charCount = new Map();

  // Convert the string to lowercase to make it case-insensitive
  const lowerStr = str.toLowerCase();

  // Count the occurrences of each character in the lowercase string
  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr.charAt(i);
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Find the first non-repeating character in the original string
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charCount.get(lowerStr.charAt(i).toLowerCase()) === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return an empty string
  return "";
}

// Example usage:
console.log(first_non_repeating_letter("stress")); // Output: 't'
console.log(first_non_repeating_letter("sTreSS")); // Output: 'T'
console.log(first_non_repeating_letter("aabbcc")); // Output: ''

// cleaner solution
function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return "";
}

/* 
Here's an explanation of how the code works:

1. The function uses a `for...in` loop to iterate through each character in the input string `s`.

2. For each character, it checks if the character occurs only once in the entire string.

3. It does this by using the `String.prototype.match()` method with a regular expression. The regular expression is constructed with the character from the string (`s[i]`) and the `gi` flags. The `g` flag stands for "global," which means it will find all occurrences of the character in the string, and the `i` flag stands for "case-insensitive," so it treats uppercase and lowercase letters as the same.

4. The `match` method returns an array of all occurrences of the character. If the length of this array is 1, it means the character occurs only once in the string and is considered the first non-repeating character.

5. If a character is found that meets this criterion, it is immediately returned as the result.

6. If no such character is found after looping through the entire string, the function returns an empty string.

Here's how you might use this function:

```javascript
console.log(firstNonRepeatingLetter('stress'));  // Output: 't'
console.log(firstNonRepeatingLetter('sTreSS'));  // Output: 'T'
console.log(firstNonRepeatingLetter('aabbcc'));   // Output: ''
```

The function effectively iterates through the input string and checks for the first character that does not repeat anywhere in a case-insensitive manner and returns it. If there's no such character, it returns an empty string. */
