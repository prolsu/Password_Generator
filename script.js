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

var userInput;
var pwLength;
var smallCase;
var upper;
var specialChar;

function generatePassword() {
    
        while (userInput !== null ) {

            userInput = prompt("How many characters do you need? Min:8 Max:128 ");
            pwLength = parseInt(userInput); 
            
            if (pwLength/1 !== pwLength) {
                alert("Please enter a number!")
            }
                
            else if (pwLength < 8 ) {
                alert("Please enter a number greater than 8 and less than 128");
            }
            else if (pwLength > 128){
                alert("Please enter a number lesser than 128 but greater than 8");
            }
            
            else {
                break;
            }
        }    console.log(pwLength);

        var smallCase = confirm("Add small case?");
        var upperCase = confirm("Add upper case?");
        var specialChar = confirm("Add special characters?");

        

        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !'()*+,-./:;<=>?@[\]^_`{|}~";
        returnVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
        returnVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return returnVal;
} //console.log(generatePassword());
