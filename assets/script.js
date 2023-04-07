var includedArr = [];
var generateBtn = document.querySelector("#generate");




function generatePassword () {
  includedArr = [];




//set the character types as strings and then split them into individual units to use in password generator
var numbers = '123456789';
numbers= numbers.split('')
var symbols= '!@$_?%+&*#'
symbols= symbols.split('')
var lowercase= 'abcdefghijklmnopqrstuvwxyz'
lowercase= lowercase.split('')
var uppercase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
uppercase= uppercase.split('')

//asks user how many characters they would like, if they leave field blank or choose number not within acceptable range it returns nothing and tells them what needs to change
const passLength = parseInt(prompt("How many characters would you like in your password? (must be at least 8 characters)"));
if (!passLength) {
  alert('Please choose a password length')
  return '';

}else if (passLength < 8 || passLength > 128) {
  alert('Password Length must be between 8 and 128 characters long')
  return '';
}else {
const includeLowercase = confirm("Would you like to use lowercase letters?");
const includeUppercase = confirm("Would you like to use uppercase Letters?");
const includeNumbers = confirm("Would you like to use numbers?");
const includeSymbols = confirm("Would you like to use special characters?");
//^^^lets user personalize what types of charaters they would like in their password

//If they do not choose any charater types it returns nothing and tells them they must select atleast one type
if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
  alert('You must pick at least 1 character type to include')
  return '';
}
  

//based on user input, creates an array using only character types they would like in their password
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
//uses the math function to create a randomly generated array the Users desires length using their chosen Character types
var randompass = []
for (var i = 0; i < passLength; i++) {
  var passIndex = Math.floor(Math.random()*includedArr.length);
  var randomChar = includedArr[passIndex];
  randompass.push (randomChar)

}
return randompass.join('')
//random array becomes the password






}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener( 'click', writePassword);
