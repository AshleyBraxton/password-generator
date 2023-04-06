var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener( 'click', writePassword ());



function generatePassword () {
  
const numbers = [1,2,3,4,5,6,7,8,9];
const symbols= ['!', '@', '$', '_','?', '%', '+','&','*','#']
const lowercase= ['abcdefghijklmnopqrstuvwxyz']
const uppercase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


const passLength = Number(prompt("How many characters would you like in your password? (must be at least 8 characters)"));
if (!passLength) {
  alert('Please choose a password length');

}else if (passLength < 8 || passLength > 128) {
  alert('Password Length must be between 8 and 128 characters long')
}else {
const includeLowercase = confirm("Would you like to use lowercase letters?");
const includeUppercase = confirm("Would you like to use uppercase Letters?");
const includeNumbers = confirm("Would you like to use numbers?");
const includeSymbols = confirm("Would you like to use special characters?");

var includedArr = '';

if (includeLowercase) {
includedArr += lowercase;
}

if (includeUppercase) {
includedArr += uppercase;
}

if (includeNumbers) {
includedArr += numbers
}


if (includeSymbols) {
includedArr += symbols ;
}
console.log(includedArr)
console.log(passLength)

if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
  alert('You must pick at least 1 character type to include')
  return '';
}
for (var i = 0; i < passLength; i++) {
  var random = includedArr[Math.floor(Math.random()*includedArr.length)];

console.log(random)
return random
}
  }
}