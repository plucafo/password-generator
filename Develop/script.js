// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate the password with user choices
function generatePassword() {
  var passwordLength;
  var includeNumbers;
  var includeLowercase;
  var includeUppercase;
  var includeSpecialCharacters;

  do {
    passwordLength = prompt(
      "Please choose a password length between 8 and 128 characters"
    );

    if (passwordLength === null) {
      return null;
    }

  } while (
    isNaN(passwordLength) ||
    parseInt(passwordLength) < 8 ||
    parseInt(passwordLength) > 128 ||
    passwordLength.trim() === ""
  );

  includeNumbers = confirm("Would you like to include numbers in your password?");

  includeLowercase = confirm("Would you like to include lower case letters in your password?");

  includeUppercase = confirm("Would you like to include upper case letters in your password?");

  includeSpecialCharacters = confirm("Would you like to include special characters in your password?");
  
  console.log("Password Length: ", passwordLength); //testing
  console.log("Include Lowercase: ", includeNumbers); //testing
  console.log("Include Lowercase: ", includeLowercase); //testing
  console.log("Include Uppercase: ", includeUppercase); //testing
  console.log("Include SpecialCharacters: ", includeSpecialCharacters); //testing

  return "testing"; 
}

function passwordLength() {}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
