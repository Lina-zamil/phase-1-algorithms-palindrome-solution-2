function isPalindrome(word) {
  // Write your algorithm here
  // 1.create an empty string called reversedWord
  let reversedWord = ""
  // 2.iterate through the input starting from the last letter
  for (let i = word.length - 1; i >= 0; i--)
    // 3.add the letter to the empty string called reversedWord
    reversedWord += word[i];
  // 4.return true if the input === the reversedWord
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  1.create an empty string called reversedWord
  2.iterate through the input starting from the last letter
  3.add the letter to the empty string called reversedWord
  4.return true if the input === the reversedWord 
*/

/*
  Add written explanation of your solution here
  return true if the input is palindrome and false otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
