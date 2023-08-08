function getNumberValue() {
  // Get the input element by its ID
  var inputElement = document.getElementById("numberInput");

  // Get the value from the input element
  var inputValue = inputElement.value;

  // Convert the input value to a number
  var numberValue = parseInt(inputValue);

  // Check if the conversion was successful and display the result
  if (!isNaN(numberValue)) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = fibonacci(numberValue);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}

function fibonacci(number) {
  var num1 = 0;
  var num2 = 1;
  var sum = 0;
  var fib = [];
  for (var i = 0; i < number; i++) {
    fib.push(num1);
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return fib;
}

fibonacci(5);
