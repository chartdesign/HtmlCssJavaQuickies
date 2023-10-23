/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. */

const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const formattedPhoneNumber = createPhoneNumber(phoneNumberArray);

function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join("");
  const middlePart = numbers.slice(3, 6).join("");
  const lastPart = numbers.slice(6).join("");

  return `(${areaCode}) ${middlePart}-${lastPart}`;
}

console.log(formattedPhoneNumber);

// solution 2
// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";

//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }

//     return format;
//   }
