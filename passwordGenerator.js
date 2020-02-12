// Assignment Code
var btn=document.getElementById("generate");
btn.addEventListener("click",generatePassword);

//Write password
  function generatePassword() {

var uppercase  = "ABCDEFGH";
var lowercase = "abcdefgh";
var number  = "12345678";
var symbols = "!@#$%^&*";
var plength;
var pCharSet ="";
var generatePassword = "";
  //Write the prompt for the password
  var pLength = prompt("How long you what your password. Must be between 8 and 128");
  
  // Give alert for lenght of password
  if(pLength < 8){
    alert( "please create a number between 8 and 128");
    return;

  }

  if(plength > 128){
    alert("Please create a number between 8 and 128");
    return;

  }

  if(uppercase){
    alert("ABECHFGH");
  }
  if(lowercase){
    alert("abcdefgh")
  }
  if(number){
    alert("12345678")
  }
  if(symbols){
    alert("!@#$%^&*")
  }
  if(pCharSet){
    alert("")
  }
  if(generatePassword){
    alert("")
  }
  
  //Write the prompt
  if(pr)

  
  function findMax(arr) {
    var maxNum = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

  
  

  
  
  
  

// Add event listener to generate button 
button.addEventListener("click"); 
  }
