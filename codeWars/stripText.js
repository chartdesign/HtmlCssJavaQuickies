/* Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. Given an input string of:
apples, pears # and bananas
grapes
bananas !apples
The output expected would be:
apples, pears
grapes
bananas
  */

function stripText(str) {
  return result;
}

//  Chat GPT respnse
function stripComments(inputString, commentMarkers) {
  // Split the input string into an array of lines
  const lines = inputString.split("\n");

  // Initialize an empty array to store the result
  const result = [];

  // Iterate through each line
  for (const line of lines) {
    let strippedLine = line;

    // Check for comment markers in the line
    for (const marker of commentMarkers) {
      const index = strippedLine.indexOf(marker);

      // If a comment marker is found, remove the text after it
      if (index !== -1) {
        strippedLine = strippedLine.substring(0, index);
      }
    }

    // Remove trailing whitespace and add the stripped line to the result array
    strippedLine = strippedLine.trim();
    result.push(strippedLine);
  }

  // Join the result array back into a single string with newline characters
  const outputString = result.join("\n");

  return outputString;
}

// Test the function with your example input
const inputString = `apples, pears # and bananas
  grapes
  bananas !apples`;

const commentMarkers = ["#", "!"];

const strippedOutput = stripComments(inputString, commentMarkers);
console.log(strippedOutput);
