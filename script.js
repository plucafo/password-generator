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

  // Prompts user to include lowercase letters
  includeLowercase = confirm(
    "Would you like to include lowercase letters in your password?"
  );

  // Prompts user to include uppercase letters
  includeUppercase = confirm(
    "Would you like to include uppercase letters in your password?"
  );

  // Prompts user to include special characters
  includeSpecialCharacters = confirm(
    "Would you like to include special characters in your password?"
  );

  // Checks that user included at least one selection
  if (
    !includeNumbers &&
    !includeLowercase &&
    !includeUppercase &&
    !includeSpecialCharacters
  ) {
    return "You must select at least one type of character to include. Please click 'Generate Password' to try again.";
  }

  // Assigns all possible characters to variables
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
  var numChars = "1234567890";
  var specialChars = "!@#$%^&*()-=";

  var characterSet = ""; // Empty string var to store selected characters

  // Checks if user included certain character sets and adds them to the characterSet var if true
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

  // Iterates through the string of selected characters using a randomIndex
  var password = "";
  for (i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return "Your randomized password is: " + "\n" + "\n" + password; // Returns the randomized password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
