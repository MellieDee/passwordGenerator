# Password Generator Starter Code
https://www.w3schools.com/jsref/met_win_confirm.asp

https://gist.github.com/bendc/1e6af8f2d8027f2965da
dutch512

https://www.mediacollege.com/internet/javascript/number/random.html



random-special-character-with-js-regex 
answered Dec 8 '17 at 23:39

collapsar: function randomSpecialChar () {
  // example set of special chars as a string in no particular order
  var s = "!\"§$%&/()=?\u{20ac}";

  // generating a random index into the string and extracting the character at that position
  return s.substr(Math.floor(s.length*Math.random()), 1);
} 

