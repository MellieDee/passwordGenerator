// Assignment code here
//to generate a random number

// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() * 
// charactersLength));
//  }
//  return result;
// }console.log(makeid(128));

//https://stackoverflow.com/questions/47719167/random-special-character-with-js-regex answered Dec 8 '17 at 23:39 collapsar

// function randomSpecialChar () {
//   // example set of special chars as a string in no particular order
//   var s = "!$%&#*";

//   // generating a random index into the string and extracting the character at that position
//   return s.substr(Math.floor(s.length*Math.random()), 1);
// } console.log(s.substr(Math.floor(s.length*Math.random()), 1))



// function randomString() {
// 	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
// 	var string_length = 8;
// 	var randomstring = '';
// 	for (var i=0; i<string_length; i++) {
// 		var rnum = Math.floor(Math.random() * chars.length);
// 		randomstring += chars.substring(rnum,rnum+1);
// 	}
// 	document.randform.randomfield.value = randomstring;
// // 
// console.log(randomString);

// ******** DATA GENERATION   **********

// (1)  ********  LENGTH & VALIDATE prompt ********
var charLength = function () {
  //a) validate input is filled
  var promptLength = window.prompt("Let's create your new password. How long do you want it to be? Pick a number between 8 and 128.")
  //validate a number was typed as opposed to leaving empty or writing out a number
  if (isNaN(promptLength)) {
    window.alert("Please pick a number between 8 & 128. Try again.");
    charLength();
  }
  //check if number is equal or greater than eight and less than or equal to 128
  if (promptLength >= 8 && promptLength <= 128) {
    console.log(promptLength + " characters long.")
    return promptLength;
  }

  //if not in range then pick again
  else {
    window.alert("Please pick a number between 8 & 128. Try again.");
    charLength();
  }
}
// charLength()


//(2)  ********* USER CRITERIA Validate at least one character type was entered *******
var userCriteria = function () {
  var confirmLower = confirm("Do you want password to contain lowercase letters?");
  var confirmUpper = confirm("Do you want UPPER CASE letters in the password?");
  var confirmNumeric = confirm("DO you want numbers in your password?");
  var confirmSpecial = confirm("Do you want special characters in the password?");

  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert("Please pick at least one option.")
    userCriteria()
  }
  else {
    var validUserChoices = []
    if (confirmLower) {
      //use lowercase in pw source string
      console.log("yes lower");
      validUserChoices += "abcdefghijklmnopqrstuvwxyz";
    }
    if (confirmUpper) {
      console.log("no lower");
      validUserChoices += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (confirmNumeric) {
      console.log("no lower");
      validUserChoices += "0123456789"
    }

    if (confirmSpecial) {
      console.log("no lower");
      validUserChoices += "$!@&%*~#^()"
    }
    console.log(validUserChoices, "validUserChoices");
    return validUserChoices;
  }

}
// // charLower();

// //(3) ********* UPPERCASE Prompt *******
// //(a) validate entered yes or no -
// //set safeguard for case or just letter
// //(b) if not y or n then send alert to pick valid answer
// var charUpper = function () {
//   var confirmUpper = confirm("Do you want UPPERCASE letters in the password?")

//   if (confirmUpper) {
//     //use UPPERCASE in pw source string
//     console.log("Yes UPPERS");
//   }
//   else {
//     //then don't use UPPERCASE in the pw - don't add to pw string source
//     console.log("No UPPERS")
//   }
// }
// // charUpper();

// (4) ********* NUMERIC Prompt *******
//(a) validate entered yes or no -
//set safeguard for case or just letter
//(b) if not y or n then send alert to pick valid answer

// var charNumeric = function () {
//   var confirmNumeric = confirm("Do you want password to contain numbers?")

//   if (confirmNumeric) {
//     //use numbers in pw (add to pw string source)
//     console.log("yes numbers");

//   }
//   else {
//     console.log("no numbers")
//     //then don't use numbers in the pw - don't add to pw string source
//   }
// }
// // charNumeric()


// // (5) *********  SPECIAL Prompt *********
// var charSpecial = function () {
//   var confirmSpecial = confirm("Do you want the password to have special characters?")

//   if (confirmSpecial) {
//     //use special characters in pw source
//     console.log("Yes Special")
//   }
//   else {
//     //then dont use special in pw source
//     console.log("No special");
//   }
// }
// // charSpecial();


//s********** CREATE FUNCTION TO GENERATE Random NEW PW ********/

var generatePassword = function () {

  var userPW = charLength();
  var userValidChoices = userCriteria();
  var password = "";
  //gen random number passord
  for (var i = 0; i < userPW; i++) {
    var value = Math.floor(Math.random() * (userValidChoices.length));
    password += userValidChoices[value]
  }
  console.log(password);
  console.log(value, userPW, userValidChoices);
  return password;
}


  ////*******GIVEN CODE****** */
  //  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = "Your new password is " + password + ".";
  }

  //Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)
