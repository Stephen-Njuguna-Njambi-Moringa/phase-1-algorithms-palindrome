function isPalindrome(word) {
  // Write your algorithm here
  var reverseWord = word.split("").reverse().join('')
  if (reverseWord == word){
      return true
  }
  else if(word.split('').length<2){
      return false

  }
  else{
      return false
  }
}


/* 
  Add your pseudocode here
*/
// Split:word
//   reverse:word
//   join:word,
//   if newWord split length <2
//   return false
//   else if it is >2 
//   return true

// Longer and detailed code

// function isPalindrome(word){
//   var reverseArr =word.split("")
//   var newArr = reverseArr.reverse()
//   var newWord = newArr.join('')

//   if (newWord.split('').length<2){
//       return false
//   }
//   else if(newWord===word){
//       return true
//   }
// }
  
/*
  Add written explanation of your solution here
  Using function isPalindrome that has one parameter (word)
  split the array and reverse it.
  Join back  the array.
  If array is less than 2 return false
  else if word is equal to word, return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
}

module.exports = isPalindrome;
