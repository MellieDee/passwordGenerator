// Assignment code here
//to generate a random number

// ******** DATA GENERATION   **********

// (1)  ********  LENGTH & VALIDATE prompt ********
//a) validate input is filled
  //if is empty send reminder to fill
//(b) input = number 
  // validate input is a number
  //if  not a number, send reminder to input a number
  // put in place safeguard if number is string
//(c) validate number is 8 < x < 128
  //if number is less or more, send reminder to pick between 8/128

//(2)  ********* LOWERCASE Prompt *******
  //(a) validate entered yes or no -
        //set safeguard for case or just letter
  //(b) if not y or n then send alert to pick valid answer

//(3) ********* UPPERCASE Prompt *******
  //(a) validate entered yes or no -
        //set safeguard for case or just letter
  //(b) if not y or n then send alert to pick valid answer

// (4) ********* NUMERIC Prompt *******
  //(a) validate entered yes or no -
        //set safeguard for case or just letter
  //(b) if not y or n then send alert to pick valid answer

  // (5) *********  SPECIAL Prompt *******
   //(a) validate entered yes or no -
        //set safeguard for case or just letter
  //(b) if not y or n then send alert to pick valid answer


//*********  CREATE RANDOM NUMBER FUNCITON  ********/



//********** CREATE FUNCTION TO DISPLAY NEW PW ********/




var  pwLength = parseInt(window.prompt("Let's create your new password. How long do you want it to be? Pick a number between 8 and 128."))
console.log(pwLength + " characters long.");



var charLower = window.prompt("Should it have lowercase letters? Yes or No?");console.log(charLower + " incl lower");

var charUpper = window.prompt("Should it have UPPERCASE letters? Yes or No?")
console.log(charUpper + " incl Upper");

var charNumeric = window.prompt("Should it have numbers? Yes or No?");
console.log(charNumeric + " incl numbers");

var charSpecial = window.prompt("Should it special characters, like !,&,%, %, # or *? Yes or No?");
console.log(charSpecial + " incl $p*c!@l");


// document.getElementById("password").innerHTML = "Your new password is " + Math.random() +  ".";


// var generatePassword =  function(min, max) {
//     var value = Math.floor(Math.random() * (max - min) + min);

//     console.log(value);
// };


////*******GIVEN CODE****** */
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);
