// Assignment code here
//to generate a random number

// ******** DATA GENERATION   **********

// (1)  ********  LENGTH & VALIDATE prompt ********
  var  charLength = function () {
    var promptLength = window.prompt("Let's create your new password. How long do you want it to be? Pick a number between 8 and 128.")

    //check if number is equal or greater than eight and less than or equal to 128

     if (isNaN(promptLength)) {
      window.alert("Please pick a number between 8 & 128. Try again."); 
      return charLength();
     }

     if (promptLength >= 8 && promptLength <= 128) {
      console.log(promptLength + " characters long.")
      }
      //if not in range then pick again
      else {
        window.alert("Please pick a number between 8 & 128. Try again."); 
        return charLength();
      }
    }
  charLength()

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
  var charLower = function() {
    var confirmLower = confirm("Do you want password to contain lowercase letters?");
 
    if (confirmLower) {
      //use lowercase in pw source string
      console.log("yes lower");
      } 
      else {
      console.log("no lower");
      //then don't use numbers in the pw - don't add to pw string source
    }
  }
  // charLower();

//(3) ********* UPPERCASE Prompt *******
  //(a) validate entered yes or no -
        //set safeguard for case or just letter
  //(b) if not y or n then send alert to pick valid answer
  var charUpper = function() {
    var confirmUpper = confirm("Do you want UPPERCASE letters in the password?")

    if (confirmUpper) {
      //use UPPERCASE in pw source string
      console.log("Yes UPPERS");  
      }
      else {
      //then don't use UPPERCASE in the pw - don't add to pw string source
      console.log("No UPPERS")
    }
  }
  // charUpper();

// (4) ********* NUMERIC Prompt *******
  //(a) validate entered yes or no -
        //set safeguard for case or just letter
  //(b) if not y or n then send alert to pick valid answer

  var charNumeric = function() {
    var confirmNumeric = confirm("Do you want password to contain numbers?")

    if (confirmNumeric){ 
      //use numbers in pw (add to pw string source)
       console.log("yes numbers");
  
    } 
    else  {
       console.log("no numbers")
       //then don't use numbers in the pw - don't add to pw string source
     }
  }
  // charNumeric()


// (5) *********  SPECIAL Prompt *********
  var charSpecial = function() {
    var confirmSpecial = confirm("Do you want the password to have special characters?")

      if (confirmSpecial) {
        //use special characters in pw source
        console.log("Yes Special")
      }
      else {
        //then dont use special in pw source
        console.log("No special");
      }
   }
  //  charSpecial();
   //(a) validate entered yes or no -
        //set safeguard for case or just letter
  //(b) if not y or n then send alert to pick valid answer




//*********  CREATE RANDOM NUMBER FUNCTION  ********/
//(maybe add alert pw will contain:  window.alert("Your password will contain...??)

// document.getElementById("password").innerHTML = "Your new password is " + Math.random() +  ".";
      
// var generatePassword =  function(min, max) {
// var value = Math.floor(Math.random() * (max - min) + min);
// }


//********** CREATE FUNCTION TO DISPLAY NEW PW ********/







// var charLower = window.prompt("Should it have lowercase letters? Yes or No?");console.log(charLower + " incl lower");

// var charUpper = window.prompt("Should it have UPPERCASE letters? Yes or No?")
// console.log(charUpper + " incl Upper");

// var charNumeric = window.prompt("Should it have numbers? Yes or No?");
// console.log(charNumeric + " incl numbers");

// var charSpecial = window.prompt("Should it special characters, like !,&,%, %, # or *? Yes or No?");
// console.log(charSpecial + " incl $p*c!@l");


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
// // generateBtn.addEventListener("click", writePassword)