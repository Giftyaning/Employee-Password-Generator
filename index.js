// Array for special characters to be included in the password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array for numerical characters to be included in the password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array for lowercase characters to be included in the password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array for uppercase characters to be included in the password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
    
  // Prompt for password length
  var length = parseInt(prompt("Enter your prefferred length (between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter your prefferred length between 8 and 128 characters.");
    return null;
  }

  // Prompt for character types
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Please select at least one character type.");
    return null;
  }

  // Return an object with user-selected options
  return {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return ""; // Return an empty string if options are not provided
  }

  var allChars = [];
  var password = "";

  if (options.lowercase) {
    allChars = allChars.concat(lowerCasedCharacters);
  }

  if (options.uppercase) {
    allChars = allChars.concat(upperCasedCharacters);
  }

  if (options.numeric) {
    allChars = allChars.concat(numericCharacters);
  }

  if (options.special) {
    allChars = allChars.concat(specialCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    password += getRandom(allChars);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
