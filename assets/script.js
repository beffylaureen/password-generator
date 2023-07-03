// Assignment Code
var generateBtn = document.querySelector("#generate");


var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lower_case = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper_case = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "&", "?"];

function generatePassword() {
  var password_options = []
  var final_password = []
  var password_length = prompt("How many characters would you like your password to be?  It can be between 8 and 128 characters.")
  console.log(password_length)
  if (password_length < 8 || password_length > 128) {
    alert("please choose an appropriate password length")
    return
  }
  var has_numbers = confirm("Would you like numbers in your password?")
  var has_lower_case = confirm("Would you like lower case letters in your password?")
  var has_upper_case = confirm("Would you like upper case letters in your password?")
  var has_special = confirm("Would you like special characters in your password?")
  if (has_numbers === true) {
    password_options = password_options.concat(numbers)
  }
  if (has_lower_case === true) {
    password_options = password_options.concat(lower_case)
  }
  if (has_upper_case === true) {
    password_options = password_options.concat(upper_case)
  }
  if (has_special === true) {
    password_options = password_options.concat(special)
  }
  for (let index = 0; index < password_length; index++) {
    final_password.push(password_options[Math.floor(Math.random() * password_options.length)])
    console.log(final_password)
  }
  return final_password.join("")
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
