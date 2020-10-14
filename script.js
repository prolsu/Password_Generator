// Assignment Code
var generateBtn = document.querySelector("#generate");
var userSelection = "";
var userInput;
var pwLength;

function generatePassword() {
    
    while (userSelection == ""){

        var smallCharset = "abcdefghijklmnopqrstuvwxyz";
        var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numberCharset = "0123456789";
        var specialCharset = "! '()*+,-./:;<=>?@[\]^_`{|}~";
        //offer user to include all option for a quicker result!
        var allFour = confirm("Include all opctions: lowercase, uppercase, numbers, and special characters?");
        if (allFour == true){
            userSelection = smallCharset + upperCharset + numberCharset + specialCharset;
            console.log(userSelection);
            break;
        }
        alert("Please choose at least one of the following options to continue");
        var smallCase = confirm("Add lowercase?");
        var upperCase = confirm("Add uppercase?");
        var numberCase = confirm("Add numbers?");
        var specialCase = confirm("Add special characters?");

        console.log("Lowercase included? " + smallCase);
        console.log("Uppercase included? " + upperCase);
        console.log("Numbers included? " + numberCase);
        console.log("Special characters included? " + specialCase);

        if (smallCase == true) {
            userSelection += smallCharset;
        }      
        if (upperCase == true) {
            userSelection += upperCharset;
        }
        if (numberCase == true) {
            userSelection += numberCharset;
        }
        if (specialCase == true) {
            userSelection += specialCharset;
        }
        if (userSelection == "") {
            alert("At least one option must be selected!");
        }
    }       
     
    while (userInput !== null || userInput !== "") {

        userInput = prompt("How many digits do you need? Min:8 Max:128 ");
        pwLength = parseInt(userInput); 
           
        if (pwLength/1 !== pwLength) {
            alert("Please enter a number!")
        }
                
        else if (pwLength < 8 ) {
            alert("Number must be greater than 8 and less than 128");
        }
        else if (pwLength > 128){
            alert("Number must be less than 128 but greater than 8");
        }
            
        else {
            break;
        }
    }    
   
        returnVal = "";
    for (var i = 0, n = userSelection.length; i < pwLength; ++i) {
        returnVal += userSelection.charAt(Math.floor(Math.random() * n));
             
    }console.log(pwLength); console.log(userSelection); console.log(returnVal);
    return returnVal;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    userSelection = "";
}
