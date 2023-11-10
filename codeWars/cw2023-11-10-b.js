/* You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
Should be a nice little kata for you :)
*/

// function extractExpression(str) {
//   //   Extract all the numbers from the string
//   const numbers = str.match(/\d/g).map(Number);
//   return numbers;
//   // determine if addition or subtraction should be performed
// }

function calculateResult(str) {
  // Extract all the numbers from the string
  const numbers = str.match(/\d+/g).map(Number);

  // Check if the operation is addition or subtraction
  if (str.includes("gains")) {
    // Perform addition if "gains" is found
    return numbers[0] + numbers[1];
  } else if (str.includes("loses")) {
    // Perform subtraction if "loses" is found
    return numbers[0] - numbers[1];
  } else {
    // Return a message if no valid operation is found
    return "No valid operation found";
  }
}

/* solution 2: 
function calculate(string) {
  return eval(string.replace('loses','-').replace('gains','+').replace(/[a-zA-Z]/g,''));
}
*/

console.log(calculateResult("Jerry has 34 apples and gains 6"));
console.log(calculateResult("Panda has 48 apples and loses 4"));
