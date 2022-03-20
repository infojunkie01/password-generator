// Assignment code here

// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



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
  console.log('Hello');

  passwordLength_min = window.prompt("What should the minimum password length be in characters?");

  passwordLength_max = window.prompt("What should the maximum password length be in characters?");
  if (passwordLength_max < passwordLength_min){
    passwordLength_max = window.prompt("Maximum length must be equal or greater than minimum length entered. Please re-enter maximum length.");
  }

  // variables for characters to include
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var special_char = "!@#$%^&*()"

  includeLowercase = window.prompt("Should the password include lowercase? Enter 1 for YES, 0 for NO.");
  chars = determineToInclude(includeLowercase, lowercase, "")
  
  includeUppercase = window.prompt("Should the password include uppercase? Enter 1 for YES, 0 for NO.");
  chars = determineToInclude(includeUppercase, uppercase, chars)

  includeNumbers = window.prompt("Should the password include numbers? Enter 1 for YES, 0 for NO.");
  chars = determineToInclude(includeNumbers, numbers, chars)

  includeSpecialChar = window.prompt("Should the password include special characters? Enter 1 for YES, 0 for NO.");
  chars = determineToInclude(includeSpecialChar, special_char, chars)

  
  // generate pwd
  getPasswordLength = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  passwordLength = getPasswordLength(passwordLength_min, passwordLength_max)
  console.log(passwordLength)

  for (var i = 0; i < passwordLength; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    console.log(password)

  }





}


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);
