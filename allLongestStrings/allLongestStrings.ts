// QUESTIONS: 
// - Do I have to find the longest string ? 
//   - I want all of the strings that are of the same length as that one ?

// PSEUDOCODE :
// START PROGRAM 
//   Set a variable called longString equal to the length of first item in the array
//   Set an array called longArray and push the first item of the array into it.
//   ITERATE through the array
//     IF the length of the current item is > longString,
//       Set longArray = an array only containing the current item
//       Set longString = length of the current Element.
//     ELSE IF the length of the current item is = longString,
//       Push the current item into longArray
//     END IF
//   END ITERATE
//   RETURN longArraay
// END PROGRAM

function allLongestStrings(inputArray: string[]): string[] {
  let longString = inputArray[0].length;
  let longArray = [inputArray[0]];
  for (let i = 1; i < inputArray.length; i += 1) {
    if (inputArray[i].length > longString) {
      longArray = [inputArray[i]];
      longString = inputArray[i].length;
    } else if (inputArray[i].length === longString) {
      longArray.push(inputArray[i]);
    }
  }
  return longArray
}

console.log(allLongestStrings(["aba", 'k', "aa", "ad", 'bbbb' "vcd", "aba", 'aaaa']));