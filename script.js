// Assignment Code/Event Listener 
document.querySelector("#generate").addEventListener("click", writePassword);

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const calpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialC = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

function generatePassword() {
  var length = prompt("Please input desired password length. Must be between 8-128 characters.");
    length = parseInt(length);
    if(length < 8 || length > 128) {
      alert("Invaild, must be between 8-128 characters");
      return;
    }
    var options = []
    var upperCase = confirm("Would you like to include uppercase letters?")
    if(upperCase) {
      options.push(...calpha)
    }
    var lowerCase = confirm("Would you like to include lowercase letter?")
    if(lowerCase) {
      options.push(...alpha)
    }
    var number = confirm("Would you like to include numbers?")
    if(number) {
      options.push(...numbers)
    }
    var specialChar = confirm("Would you like to inculde special characters")
    if(specialChar) {
      options.push(...specialC)
    }
    if(options.length === 0) {
    alert("Invalid")
    return;
    }
    var characters = ""
    for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * options.length);
    characters += options[index]
    }
    return characters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



