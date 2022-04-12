function generatePassword(){
    //TODO: your code goes here


var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var characters = ["#", "!", "%", "$", "&", "'", "(", ")", "+", "*", ",", "-"]

var numCharacter = prompt ("How many characters would you like? Please choose between 8-128.");
var numbers1 = confirm ("Do you want your password to contain numbers?");
var uppercase2 = confirm ("Do you want your password to contain uppercase letters??");
var lowercase3 = confirm ("Do you want your password to contain lowercase letters?");
var characters4 = confirm ("Do you want special characters in your password?");

var resultArray = [];
var userArray = [];



if (numbers1){
    resultArray = resultArray.concat(numbers);
    
  }
  
  if (uppercase2){
    resultArray = resultArray.concat(uppercase);
  
  }
  
  if (lowercase3){
    resultArray = resultArray.concat(lowercase);
  
  }
  
  if (characters4){
    resultArray = resultArray.concat(characters);
  }
  

  for (var i = 0; i < numCharacter; i++) {
      
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }
    console.log(resultArray)
    return userArray.join("") ;
}
  


   
    
    
    
    
   

   
  
  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



  //1. Prompt the user for the password criteria.
  //   a. Password length between 8-128 characters.
  //   b. Lowercase, uppercase, numbers, special characters.
  //2. Validate the input.
  //3. Generate password based on criteria.



  // ==================assigning variables
  // snag the button
  // length min-max
  // lowercase array
  // uppercase array
  // numbers array
  // specialk array
  // piggybank
  // text output field
  // output password



  // ================assaigning prompts and storing responses
  // listen to the button
  // how long is the password?
  // lowercase?   (if yes) store in empty piggybank array (concat)
  // uppercase?   (if yes) store in empty piggybank array
  // numbers?   (if yes) store in empty piggybank array
  // special k (if yes) store in empty piggybank array
  // fallback (if no to all char types, restart function)


  // =====================generating / returned passwords
  // for loop grab random characters from piggybank array - password length (tempArray)

