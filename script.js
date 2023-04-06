var includedArr = [];
var generateBtn = document.querySelector("#generate");




function generatePassword () {
  includedArr = [];
  // var availableCharacters = {
  //   hasLower: includeLowercase,
  //   hasUper: includeUppercase,
  //   hasNumbers: includeNumbers,
  //   hasSymbol: includeSymbols, 
  // }
 




var numbers = '123456789';
numbers= numbers.split('')
var symbols= '!@$_?%+&*#'
symbols= symbols.split('')
var lowercase= 'abcdefghijklmnopqrstuvwxyz'
lowercase= lowercase.split('')
var uppercase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
uppercase= uppercase.split('')


const passLength = parseInt(prompt("How many characters would you like in your password? (must be at least 8 characters)"));
if (!passLength) {
  alert('Please choose a password length');

}else if (passLength < 8 || passLength > 128) {
  alert('Password Length must be between 8 and 128 characters long')
}else {
const includeLowercase = confirm("Would you like to use lowercase letters?");
const includeUppercase = confirm("Would you like to use uppercase Letters?");
const includeNumbers = confirm("Would you like to use numbers?");
const includeSymbols = confirm("Would you like to use special characters?");



if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
  alert('You must pick at least 1 character type to include')
  return '';
}
// const createPassword = (passLength, includeNumbers, includeLowercase, includeSymbols, includeUppercase) => {
  


if (includeLowercase) {
includedArr = includedArr.concat(lowercase);
}


if (includeUppercase) {
includedArr = includedArr.concat(uppercase);
}


if (includeNumbers) {
includedArr = includedArr.concat(numbers)
}


if (includeSymbols) {
includedArr = includedArr.concat(symbols) ;
}
// console.log(createPassword)
console.log(includedArr)
console.log(passLength)
// let includedArr = '';
var randompass = []
// console.log(createPassword((passLength, includeNumbers, includeLowercase, includeSymbols, includeUppercase)))
for (var i = 0; i < passLength; i++) {
  var passIndex = Math.floor(Math.random()*includedArr.length);
  var randomChar = includedArr[passIndex];
  randompass.push (randomChar)
  // var random = Math.floor(Math.random()*includedArr.length);;
// }

}
console.log(randompass)
return randompass.join('')
//  }







}
}
// const availableCharacters = [
  //   ...(includeNumbers ? numbers : []),
  //   ...(includeLowercase ? lowercase : []),
  //   ...(includeSymbols ? symbols : []),
  //   ...(includeUppercase ? uppercase : []),
  // ] ;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener( 'click', writePassword ());
