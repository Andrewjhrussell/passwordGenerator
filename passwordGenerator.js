// Assignment Code
var generateBtn = document.querySelector("#generate");
var pw1 = ["A","B","C","D","E","F","G","H"];
var pw2 = ["a","b","c","d","e","f","g","h"];
  var pw3 = [1,2,3,4,5,6,7,8];
  var pw4 = ["!","@","#","$","%","^","&","*"];

// Write password to the #password input
function generatePassword () {
 
var selectpasswords = ""
var answer = ""

var user = prompt ("length of password")

var pw3 = confirm("number?");
var pw2 = confirm("lowercase letters");
var pw1 = confirm("uppercase letters");
var pw4 = confirm("symbols");

if (user < 8||user > 128) {alert("invalid selection");
return generatePassword();}

if(pw1){selectpasswords= selectpasswords + pw1}

if(pw2){selectpasswords= selectpasswords + pw2}

if(pw4){selectpasswords= selectpasswords + pw4}

if(pw3){selectpasswords= selectpasswords + pw3}

if (pw2 === false && pw3 === false && pw1 === false && pw4 === false) {
    alert ("retry");
    return generatePassword();
  }

  for(var count = 1; count <= userchoice; count++) {
    var randomIndex = Math.floor(Math.random() * allSelectTypes.length);
    result = result + selectpasswords.charAt(randomIndex)


  
  var passwordText = document.querySelector("#password");

  
  

  passwordText.value = password;

}}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);
