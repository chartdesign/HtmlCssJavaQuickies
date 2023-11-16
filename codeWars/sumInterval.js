/* accept an array of intervals which will be an array of 2 numbers
 the function will return a sum of the intervals. 
 Overlapping intervals should be counted once
 examples: [
   [1, 4],
   [7, 10],
   [3, 5]
] => 7

Sort the intervals: First, sort the intervals based on their start times. This will make it easier to merge overlapping intervals.

Merge overlapping intervals: Iterate through the sorted intervals. If an interval overlaps with the previous one, merge them into a single interval.

Calculate the sum: Once all overlapping intervals are merged, calculate the sum of the lengths of these intervals.


*/

function sumIntervals(intervals) {
  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [];
  for (let interval of intervals) {
    // If the list of merged intervals is empty or if the current
    // interval does not overlap with the previous, simply append it.
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      // Otherwise, there is overlap, so we merge the current and previous intervals.
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }

  // Calculate the sum of lengths of the merged intervals
  return merged.reduce((sum, interval) => sum + interval[1] - interval[0], 0);
}

// Example usage
console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
); // 9
console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
); // 7
console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
); // 19
console.log(
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ])
); // 100000030
