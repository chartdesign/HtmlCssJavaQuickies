/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
*/

function binaryArrayToNumber(arr) {
  return parseInt(arr.join(""), 2);
}

// Testing the function with provided examples
console.log(binaryArrayToNumber([0, 0, 0, 1])); // ==> 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // ==> 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // ==> 5
console.log(binaryArrayToNumber([1, 0, 0, 1])); // ==> 9
console.log(binaryArrayToNumber([0, 0, 1, 0])); // ==> 2
console.log(binaryArrayToNumber([0, 1, 1, 0])); // ==> 6
console.log(binaryArrayToNumber([1, 1, 1, 1])); // ==> 15
console.log(binaryArrayToNumber([1, 0, 1, 1])); // ==> 11
console.log(binaryArrayToNumber([1, 0, 1, 1, 0, 1, 1])); // ==> 91
