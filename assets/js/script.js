// Assignment code here

// THEN my input should be validated and at least one character type should be selected


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var determineToInclude = function(answer, char_type, chars){
  
  answer = parseInt(answer);

  switch (answer) {
    case 0:
      return chars = chars;
      break;
    case 1:
      return chars = chars + char_type;
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      break;
  }
}


var generatePassword = function(){
  
  // Get password length from user
  function passwordLength(){
    inputtedLength = window.prompt("What length should the password be? It should be at least 8 characters and no more than 128 characters.");
    if (inputtedLength < 8 || inputtedLength > 128){
      passwordLength();
    }
    return inputtedLength
  }
  passwordLength = passwordLength();
  console.log(passwordLength)

  // Get info on characters to include
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var special_char = "!@#$%^&*()"
  var password = ""

  includeLowercase = window.prompt("Should the password include lowercase? Enter 1 for YES, 0 for NO.");
  chars = determineToInclude(includeLowercase, lowercase, "")
  
  includeUppercase = window.prompt("Should the password include uppercase? Enter 1 for YES, 0 for NO.");
  chars = determineToInclude(includeUppercase, uppercase, chars)

  includeNumbers = window.prompt("Should the password include numbers? Enter 1 for YES, 0 for NO.");
  chars = determineToInclude(includeNumbers, numbers, chars)

  includeSpecialChar = window.prompt("Should the password include special characters? Enter 1 for YES, 0 for NO.");
  chars = determineToInclude(includeSpecialChar, special_char, chars)
  console.log(chars)

  // Generate password given length and characters to include
  for (var i = 0; i < passwordLength; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    console.log(password)
  }
  return password

}


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
