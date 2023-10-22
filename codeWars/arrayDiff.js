/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// silution 1

function arrayDiff(arr1, arr2) {
  const diffArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      diffArr.push(arr1[i]);
    }
  }
  return diffArr;
}

// Solution 2

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}
