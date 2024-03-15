// Project Name: calculator

// Project description: Addition, subtraction, multiplication and division of numbers

// Start date: Monday, December 25

// End date: Wednesday, December 27

// Email: robotgoodrobot@gmail.com

// Names of front end developers:
// mobin

// Github developer :
// @mobiiiin

// moteghayer komaki ke ba estfadeh azash khoroji ra chap mikonim
// It is a variable that we use to print the output answer, that is, it is basically an auxiliary variable
let result;
function sum(num1, amalgar, num2) {
  if (amalgar === "+") {
    result = num1 + num2;
  } else if (amalgar === "-") {
    result = num1 - num2;
  } else if (amalgar === "*") {
    result = num1 * num2;
  } else if (amalgar === "/") {
    result = num1 / num2;
  }
}
// ba estefadeh az prompt vorodi ra az karbar migirim va uon naumber ghablesh yani inke type chizi ke vared mikonad faghat number bashad
// Using the prompt, we take the input from the user, and that number before it also means that everything the user enters must be a number (its type must be of the number type).
sum(
  Number(prompt("inter the number")),
  prompt("Enter the pragmatist"),
  Number(prompt("inter the number"))
);

console.log(result);
