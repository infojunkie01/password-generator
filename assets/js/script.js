// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to determine if to include specified character type
function determineToInclude(question, char_type, chars){
  
  answer = parseInt(window.prompt(question));

  switch (answer) {
    case 0:
      return chars = chars;
      break;
    case 1:
      return chars = chars + char_type;
      break;
    default:
      window.alert("Invalid option. Please try again.");
      determineToInclude(question, char_type, chars);
      break;
  }
}

// Function to determine which character types to include
var passwordCharacters = function(){
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var special_char = "!@#$%^&*()+=-,./:;<>?[]_~`{}"

  includeLowercase = "Should the password include lowercase? Enter 1 for YES, 0 for NO.";
  chars = determineToInclude(includeLowercase, lowercase, "")
  
  includeUppercase = "Should the password include uppercase? Enter 1 for YES, 0 for NO.";
  chars = determineToInclude(includeUppercase, uppercase, chars)
  
  includeNumbers = "Should the password include numbers? Enter 1 for YES, 0 for NO.";
  chars = determineToInclude(includeNumbers, numbers, chars)
  
  includeSpecialChar = "Should the password include special characters? Enter 1 for YES, 0 for NO.";
  chars = determineToInclude(includeSpecialChar, special_char, chars)

  if (chars === ""){
    window.alert("Please select at least one character type to include.")
    passwordCharacters();
  }
  console.log(chars)
  return chars
}

// Function to determine password paramaters and generate password
var generatePassword = function(){
  
  // Get password length from user
  function passwordLength(){
    inputtedLength = window.prompt("What length should the password be? It should be at least 8 characters and no more than 128 characters.");
    if (inputtedLength < 8 || inputtedLength > 128){
      window.alert("Invalid length. Please try again.");
      passwordLength();
    }
    return inputtedLength
  }
  passwordLength = passwordLength();

  // Get info on characters to include from user
  window.alert("Specifiy if password should include lowercase, uppercase, numeric or speical characters. Select at least one character type to include.")
  chars = passwordCharacters();
  
  // Generate password given length and characters to include
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
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
