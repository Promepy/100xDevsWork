/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowerStr = "";
  for(i=0; i<str.length; i++){
      let c = str.charAt(i).toLowerCase();
      if(c >= "a" && c <= "z"){
          lowerStr = lowerStr.concat(c);
      }
  }
  let reverseLowerStr = lowerStr.split("").reverse().join("");

  for(i=0; i<str.length; i++){
      if(lowerStr[i]!=reverseLowerStr[i]){
          return false;
      }
  }
  return true;
}


module.exports = isPalindrome;
