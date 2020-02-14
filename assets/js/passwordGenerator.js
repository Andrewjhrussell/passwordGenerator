// Assignment Code
var btn = document.getElementById("generate");
btn.addEventListener("click", generatePassword);
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
function createPassword(length, arrArrays) {
  var pass=""
  for (var i = 0; i < length; i++) {
    var randomArray = Math.floor(Math.random()*arrArrays.length)
    var randomChar = Math.floor(Math.random()*arrArrays[randomArray].length)
    pass = pass + arrArrays[randomArray][randomChar]
    console.log(pass);
    
  }
  console.log(pass);
  var passwordBox = document.getElementById("password")
  passwordBox.textContent = pass
}
function characterTypes (length){
  var arrArrays =[]
  if(confirm("Do you want special characters")){
    arrArrays.push(specialCharacters)
  }
  if(confirm("Do you want numbers")){
    arrArrays.push(numbers)
  }
  if(confirm("Do you want uppercase letters")){
    arrArrays.push(upperCasedCharacters)
  }
  if(confirm("Do you want lowercase letters")){
    arrArrays.push(lowerCasedCharacters)
  }
  if(arrArrays){
    createPassword(length, arrArrays)
  }else{
    alert("You must select one character type!")
    characterTypes(length)
    return
  }
}
//Write password
function generatePassword() {

  var uppercase = "ABCDEFGH";
  var lowercase = "abcdefgh";
  var number = "12345678";
  var symbols = "!@#$%^&*";
  var plength;
  var pCharSet = "";
  //var generatePassword = "";
  //Write the prompt for the password
  var pLength = prompt("Dr. Russell How long you what your password. Must be between 8 and 128");
  if(pLength < 8 || pLength > 128){
    alert("password should be between 8 and 128 characters")
    generatePassword()
    return
  }else{
    characterTypes(pLength)
  }

}

//   // Give alert for lenght of password
//   if(pLength < 8){
//     alert( "please create a number between 8 and 128");
//     return;

//   }

//   if(plength > 128){
//     alert("Please create a number between 8 and 128");
//     return;

//   }

//   if(uppercase){
//     prompt("Put Uppercase ABECHFGH in");
//   }
//   if(lowercase){
//     prompt("Put Lowercase abcdefgh in")
//   }
//   if(number){
//     prompt("Put numbers 12345678 in")
//   }
//   if(symbols){
//     prompt("Put your symbols in !@#$%^&*")
//   }
//   if(pCharSet){
//     alert("Your Password In The Being Created Dr. Russell")
//   }
//   if(generatePassword){
//     alert("")
//   }

//   //Write the prompt
//   if(pr)


//   function findMax(arr) {
//     var maxNum = arr[0];
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] > maxNum) {
//             maxNum = arr[i];
//         }
//     }
//     return maxNum;
// }









// Add event listener to generate button 
// button.addEventListener("click"); 
