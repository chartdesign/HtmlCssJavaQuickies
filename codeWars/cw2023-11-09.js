/* Write a javascript function that converts a string into an integer. The strings simply represent the numbers in words.
Examples:
"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:
The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
------------ANS---------------
This function works as follows:

It defines maps for small and big number words.
It initializes a total and a current variable to keep track of the total number and the current number segment.
It removes the word 'and' since it's optional and splits the input string into an array of words.
It iterates over each word, checking against the maps to calculate the corresponding numeric value.
If the word is 'hundred' or a big number word like 'thousand' or 'million', it performs the necessary multiplication.
Finally, it adds the current number to the total and returns it.
This function assumes that the input strings are well-formed and valid as per the given specifications.

*/
function wordsToNumber(words) {
  const smallNumbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };

  const bigNumbers = {
    thousand: 1000,
    million: 1000000,
  };

  let total = 0;
  let current = 0;

  words = words.replace(/ and /g, " ").replace(/-/g, " "); // Remove the word 'and'
  const wordList = words.split(/\s+/);

  wordList.forEach(function (word) {
    if (smallNumbers[word] != null) {
      current += smallNumbers[word];
    } else if (word === "hundred") {
      current *= 100;
    } else if (bigNumbers[word] != null) {
      total += current * bigNumbers[word];
      current = 0;
    } else {
      throw new Error("Unknown number: " + word);
    }
  });

  return total + current;
}

// Examples
console.log(wordsToNumber("one")); // 1
console.log(wordsToNumber("twenty")); // 20
console.log(wordsToNumber("two hundred forty-six")); // 246
console.log(
  wordsToNumber("seven hundred eighty-three thousand nine hundred nineteen")
); // 783919
