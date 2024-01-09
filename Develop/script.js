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

  while (true) {
    passwordLength = prompt(
      "Please choose a password length between 8 and 128 characters"
    );

    // Checks if user clicks cancel
    if (passwordLength === null) {
      alert("Operation cancelled by the user.");
      return null;
    }

    // Checks if user enters an invalid value and alerts them if true
    if (
      isNaN(passwordLength) ||
      parseInt(passwordLength) < 8 ||
      parseInt(passwordLength) > 128 ||
      passwordLength.trim() === ""
    ) {
      alert(
        "Your length must be a valid number between 8 and 128 characters. Please try again."
      );
    } else {
      break;
    }
  }

  // Prompt user to include numbers
  includeNumbers = confirm(
    "Would you like to include numbers in your password?"
  );

  // Prompt user to include lowercase letters
  includeLowercase = confirm(
    "Would you like to include lowercase letters in your password?"
  );

  // Prompt user to include uppercase letters
  includeUppercase = confirm(
    "Would you like to include uppercase letters in your password?"
  );

  // Prompt user to include special characters
  includeSpecialCharacters = confirm(
    "Would you like to include special characters in your password?"
  );

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
