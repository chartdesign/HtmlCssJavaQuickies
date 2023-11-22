function largestNumGrp(str) {
  let result = 0;
  let numGrps = str.match(/\d+/g);
  for (let num of numGrps) {
    if (parseInt(num) > result) {
      result = num;
    }
  }
  console.log(numGrps);

  return result;
}

// use a regEx to extract the grooups of numbers and put into array
// return the max
console.log(largestNumGrp("gh12cdy695m1"));

/* 
optimized solution:
function solve(s){
  return Math.max(...s.match(/\d+/g));
};

*/
