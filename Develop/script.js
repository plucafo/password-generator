// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate a random password based on user selections
function generatePassword() {
  var passwordLength;

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

  var includeNumbers;
  var includeLowercase;
  var includeUppercase;
  var includeSpecialCharacters;

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

  if (
    !includeNumbers &&
    !includeLowercase &&
    !includeUppercase &&
    !includeSpecialCharacters
  ) {
    return "You must select at least one type of character to include. Please click 'Generate Password' to try again.";
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChars = "1234567890";
  var specialChars = "!@#$%^&*()-=";

  var characterSet = "";

  if (includeNumbers) {
    characterSet += numChars;
  }
  
  if (includeLowercase) {
    characterSet += lowercaseChars;
  }

  if (includeUppercase) {
    characterSet += uppercaseChars;
  }

  if (includeSpecialCharacters) {
    characterSet += specialChars;
  }

  console.log("Character set: " + characterSet); //testing

  console.log("Password Length: ", passwordLength); //testing
  console.log("Include Numbers: ", includeNumbers); //testing
  console.log("Include Lowercase: ", includeLowercase); //testing
  console.log("Include Uppercase: ", includeUppercase); //testing
  console.log("Include SpecialCharacters: ", includeSpecialCharacters); //testing

  return characterSet;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
