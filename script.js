// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// brainstorming code

var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ",", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];


//Next function returns full alphabet and stores it in variable "lowercase"
  //https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery

function genCharArray(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for ( ; i <= j; ++i) {
      a.push(String.fromCharCode(i));
  }
  return a;
}
var lowercase = genCharArray('a', 'z'); 
console.log(lowercase); // ["a", ..., "z"]

// next variable "uppercase" takes the array from "lowercase" and returns alphabet in uppercase
var uppercase = lowercase.map(lowercase => lowercase.toUpperCase()); 
console.log(uppercase); // ["A",....,"Z"]
