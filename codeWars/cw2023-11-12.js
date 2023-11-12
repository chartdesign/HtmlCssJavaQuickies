/* In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can! 
Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.
*/

// What are the parameters here? => create a function that takes in a string and returns all variatons of string while removing any duplicates
// results => return an array of string permutations while removing duplicates
// example would be abc => ['abc', 'acb', 'bac', ...bca]

// function createPermutations(str) {
//   const permutationArray = new Set();
//   const permutation = str.permutate;
//   permutationArray.push(permutation);
//   return permutationArray;
// }

// console.log(createPermutations("abc"));

//  chatGPT response
/* To create a JavaScript function that generates all permutations of a given string and removes duplicates, we can use a recursive approach. The function will handle each character in the string, swap it with other characters, and then recursively process the remaining part of the string. To remove duplicates, we can use a `Set` to store the permutations.

Here's the JavaScript code for the function:
*/

function getPermutations(str) {
  const result = new Set();

  function permute(arr, m = []) {
    if (arr.length === 0) {
      result.add(m.join(""));
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }

  permute(str.split(""));

  return Array.from(result);
}

// Test the function with examples
console.log(getPermutations("a")); // ['a']
console.log(getPermutations("ab")); // ['ab', 'ba']
console.log(getPermutations("abc")); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(getPermutations("aabb")); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

/* This function works as follows:
1. `getPermutations` takes a string as input.
2. It uses a helper function `permute` to recursively generate permutations.
3. `permute` takes the current array of characters and an array `m` to accumulate the current permutation.
4. For each character in the array, it removes the character, adds it to `m`, and calls `permute` recursively with the remaining characters.
5. The base case is when the array is empty, at which point the permutation is added to the `result` set.
6. Since `result` is a `Set`, it automatically handles the removal of duplicate permutations.
7. The function returns an array of unique permutations converted from the set.
*/

/*
The time and space complexity of the provided function for generating permutations of a string can be analyzed using Big O notation, which is a mathematical notation used to describe the upper bound of an algorithm's complexity.

### Time Complexity

1. **Basic Operations**: For a string of length `n`, there are `n!` (factorial of `n`) permutations. The reason is that there are `n` choices for the first character, `n-1` choices for the second, and so on.

2. **Recursion Overhead**: The recursive approach adds some overhead. For each recursive call, a new array (`curr`) is created by slicing the original array, and operations like `splice` and `concat` are performed. However, these operations are linear in time relative to the length of the string at each recursion level.

3. **Overall Time Complexity**: Considering the number of permutations and the operations performed at each level of recursion, the overall time complexity is `O(n * n!)`. This is because for each of the `n!` permutations, we are performing operations that are linear in time (like slicing, splicing, and concatenating arrays).

### Space Complexity

1. **Recursive Stack**: Each recursive call adds a new layer to the call stack. The maximum depth of the recursive call stack is `n` (the length of the string), as the deepest recursion happens when the string is completely processed.

2. **Auxiliary Space**: The function uses additional space for the `result` set, the array `curr`, and the array `m` in each recursive call. The size of these structures is proportional to the length of the string.

3. **Overall Space Complexity**: The space complexity is primarily determined by the recursive stack and the auxiliary space used for storing permutations and temporary arrays. Therefore, the space complexity is `O(n * n!)`. This accounts for storing each permutation (of which there are `n!`) and the space for the recursive call stack (which goes up to `n`).

In summary, both the time and space complexity of this function are `O(n * n!)`, where `n` is the length of the input string. This reflects the fact that generating all permutations of a string is an inherently expensive operation, both in terms of the number of computations required and the amount of memory used.
*/
