// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for(var i = 0; i <= complexity; i++){
	password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  

  passwordText.value = ("ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
