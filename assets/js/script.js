// Assignment code here
//isNaN(promptLength) ||

// (1)  ********  LENGTH & VALIDATE prompt ********
var charLength = function () {
  //a) validate input is filled
  var promptLength = window.prompt("Let's create your new password. How long do you want it to be? Pick a number between 8 and 128.")
  //validate a number was typed as opposed to leaving empty or writing out a number
  if (isNaN(promptLength) || promptLength === null  ||  promptLength === "") {
    window.alert("Please pick a number between 8 & 128. Try again.");
    promptLength = "";
    return charLength();
  }

  //check if number is equal or greater than eight and less than or equal to 128
  else if (promptLength >= 8 && promptLength <= 128) {
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

//(2)  ********* CHARACTER  Prompts *******
//(a) validate entered yes or no -
//set safeguard for case or just letter
//(b) if not y or n then send alert to pick valid answer
var userCriteria = function () {
  var confirmLower = confirm("Do you want password to contain lowercase letters?");
  var confirmUpper = confirm("Do you want UPPER CASE letters in the password?");
  var confirmNumeric = confirm("DO you want numbers in your password?");
  var confirmSpecial = confirm("Do you want special characters in the password?");
// debugger
  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert("Please pick at least one option.")
    return userCriteria()
  }

  else {
  var validUserChoices = []
  if (confirmLower) {
    //use lowercase in pw source string
    console.log("yes lower");
    validUserChoices += "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirmUpper) {
    console.log("Yes UPPER");
    validUserChoices += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (confirmNumeric) {
    console.log("Yes numbers");
    validUserChoices += "0123456789"
  }
  if (confirmSpecial) {
    console.log("Yes Special");
    validUserChoices += "$!@&%*~#^()"
  }
  console.log(validUserChoices, "validUserChoices");
  return validUserChoices;
  }
}

var generatePassword = function () {
//not taking second entry of charLength to here??
var password = ""; 
var userPW = charLength();
var userValidChoices = userCriteria();
console.log(userValidChoices);

  for (var i = 0; i  < userPW; i++ ) {
    var value = Math.floor(Math.random() * (userValidChoices.length));
    password += userValidChoices[value];
  }
  console.log(password);
  console.log(value, userPW, userValidChoices);
  return  password;
};

////*******GIVEN CODE****** */
//  // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = "Your new password is " + password;
 };

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword)