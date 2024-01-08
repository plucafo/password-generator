// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordLength;

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

  return "testing"; // You can replace this with your actual password generation logic
}

function passwordLength() {}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
