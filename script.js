var generateBtn = document.querySelector("#generate");


var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]

var numberChar = ["0","1","2","3","4","5","6","7","8","9"];

var specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_", "-", "+","=","{","[","]","}","|","\\","/",":",";","<",",",">",".","?",];
 
var possibleChar = [];



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
} 


generateBtn.addEventListener("click", writePassword);


function generatePassword(){

  var password = ""
  var passLength = window.prompt("How many characters? Please put in a number that is between 8-128");

  if (passLength < 8){
    alert("Please put in a number between 8-128");
    generatePassword()
    } else if (passLength > 128 ){
      alert("Please put in a number between 8-128");
      generatePassword()
    } else if (isNaN(passLength)){
      alert("Please enter a number between 8-128");
      generatePassword()
    } 
  
  var lowercase = window.confirm("Should your password contains lowercase?");
  if (lowercase){
    possibleChar = possibleChar.concat(lowercaseChar);

  }

  var uppercase = window.confirm("Should your password contains uppercase?");
  if (uppercase){
    possibleChar = possibleChar.concat(uppercaseChar);
    
  }

  var number = window.confirm("Should your password contains numbers?");
  if (number){
    possibleChar = possibleChar.concat(numberChar);
    
  }

  var special = window.confirm("Should your password contains special characters?");
  if (special){
    possibleChar = possibleChar.concat(specialChar);
    
  }


 for (var i = 0; i < passLength; i++) {
  password += possibleChar[Math.floor(Math.random() * (possibleChar.length))];
}
  return password 
} 

 

  
  


