function isPalindrome(word) {
  // Write your algorithm here
  /**
   * Reverses a string and returns it
   * 
   * @param {String} - The string to reverse
   * @return {String} - The reverse of the supplied string 
   */
  function reverseString(stringToReverse) {
    //Split string characters into an array and mark its start and end indexes
    var 
      chars = stringToReverse.split(''),
      startIndex = 0, 
      endIndex = chars.length - 1
    ;
    //Step from the beginning and end of the array 
    //toward the middle, swapping the characters at the start 
    //and end indexes
    while (startIndex < endIndex) {
      var left = chars[startIndex];  
      chars[startIndex] = chars[endIndex];
      chars[endIndex] = left;
      
      startIndex++;
      endIndex--;
    }
    return chars.join('');
  }
 //If a word is the same forwards and backwards, it is a palindrome 
 return (word === reverseString(word));
}
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("Expecting: true");
  console.log("=>",isPalindrome("racecar"));
  console.log("Expecting: true");
  console.log("=>",isPalindrome("a"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: false");
  console.log("=>",isPalindrome("ab"));
}

  module.exports = isPalindrome;
