// var length = Number(prompt("How many characters would you like in your password? (must be at least 8 characters)"));
// var lowercaseLetters = window.confirm("Would you like to use lowercase letters?");
// var uppercaseLetters = window.confirm("Would you like to use uppercase Letters?");
// var number = confirm("Would you like to use numbers?");
// var specialChar = confirm("Would you like to use special characters?");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener( 'click', writePassword ());



function getRandomLowercase () {
  const lowercase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  return lowercase [Math.floor(Math.random() * lowercase.length)];
}

function getRandomUppercase () {
  const uppercase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  return uppercase [Math.floor(Math.random() * uppercase.length)];
}
function getRandomNumber () {
  const numbers = [1,2,3,4,5,6,7,8,9]
  return numbers [Math.floor(Math.random() * numbers.length)];
}
function getRandomSymbol () {
  const symbols= ['!', '@', '$', '_','?', '%', '+','&','*','#']
  return symbols [Math.floor(Math.random() * symbols.length)];
}
  // console.log (getRandomLowercase ())
  // console.log (getRandomUppercase ())
  // console.log (getRandomNumber ())
  // console.log (getRandomSymbol ())

  const randomGenerate = {
    lower: getRandomLowercase,
    upper: getRandomUppercase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  }
function generatePassword () {

const passLength = Number(prompt("How many characters would you like in your password? (must be at least 8 characters)"));
const includeLowercase = confirm("Would you like to use lowercase letters?");
const includeUppercase = confirm("Would you like to use uppercase Letters?");
const includeNumbers = confirm("Would you like to use numbers?");
const includeSymbols = confirm("Would you like to use special characters?");

let createdPass = '';

const chosenIncluded = includeLowercase + includeUppercase + includeNumbers + includeSymbols;

const includedArr = [includeLowercase, includeUppercase, includeNumbers, includeSymbols]
console.log (includedArr);
}
// const numbers = [1,2,3,4,5,6,7,8,9];
// const symbols= ['!', '@', '$', '_','?', '%', '+','&','*','#']
// const lowercase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// const uppercase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// const hasLowercase = confirm("Would you like to use lowercase letters?");
// const hasUppercase = confirm("Would you like to use uppercase Letters?");
// const hasNumbers = confirm("Would you like to use numbers?");
// const hasSymbols = confirm("Would you like to use special characters?");

