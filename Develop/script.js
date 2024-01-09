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

  // do {
  //   passwordLength = prompt(
  //     "Please choose a password length between 8 and 128 characters"
  //   );

  //   if (passwordLength === null) {
  //     return;
  //   }

  //   if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || passwordLength.trim() === "") {
  //     alert("Your length must be between 8 and 128 characters. Please try again.");
  //   }

  // } while (
  //   isNaN(passwordLength) ||
  //   parseInt(passwordLength) < 8 ||
  //   parseInt(passwordLength) > 128 ||
  //   passwordLength.trim() === ""
  // );

  while (true) {
    passwordLength = prompt("Please choose a password length between 8 and 128 characters");
  
    if (passwordLength === null) {
      // User clicked Cancel
      alert("Operation cancelled by the user.");
      return null; // Exit the loop if the user cancels
    }
  
    if (isNaN(passwordLength) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || passwordLength.trim() === "") {
      // Valid input, exit the loop
      // Invalid input, show alert and continue the loop
      alert("Your length must be a valid number between 8 and 128 characters. Please try again.");
    } else {
      break;
    }
  }

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
