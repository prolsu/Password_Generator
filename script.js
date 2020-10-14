// Assignment Code
var generateBtn = document.querySelector("#generate");
var userSelection = "";
var userInput;
var pwLength;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  userSelection = "";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    
    while (userSelection == ""){
        alert("Please select at least one of the following options...");
    
        var smallCase = confirm("Add small case?");
        var upperCase = confirm("Add upper case?");
        var numberCase = confirm("Add numbers?");
        var specialCase = confirm("Add special characters?");

        console.log("User's smallcase choice: " + smallCase);
        console.log("User's uppercase choice: " + upperCase);
        console.log("User's numbers choice: " + numberCase);
        console.log("User's special characters choice: " + specialCase);

        var smallCharset = "abcdefghijklmnopqrstuvwxyz";
        var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numberCharset = "0123456789";
        var specialCharset = "! '()*+,-./:;<=>?@[\]^_`{|}~";
           
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
            if (userSelection !== ""){
                break;
            }
        
    }       
     
    while (userInput !== null || userInput !== "") {

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
    }    
        
        charset = userSelection;
        returnVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
        returnVal += charset.charAt(Math.floor(Math.random() * n));
             
    }console.log(pwLength); console.log(charset); console.log(returnVal);
    return returnVal;
    
} 
