// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// solution 1
// function toCamelCase(str) {
//   let arr = str.split(/[-_]/);
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   return arr.join("");
// }

// solution 2
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
console.log(toCamelCase("the_stealth_warrior"));
