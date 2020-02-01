// QUESTION:
// - How do we handle items that are of equal value ? Does it HAVE to increase, or can it stay the same value ?

// PSEUDOCODE
// START Program
//   Set an empty variable equal to 0 called outOfOrderCounter 

//   ITERATE over the Array
//     IF the element to the right of the current element is less than the current Element, increment outOfOrderCounter. 
//   END ITERATE

//   IF outOfOrderCounter <= 1, return true. Else, return false.
// END PROGRAM

function almostIncreasingSequence(sequence: number[]): boolean {
  let outOfOrderCounter = 0;
  for (let i = 0; i < sequence.length; i += 1) {
    if (sequence[i] <= sequence[i - 1]) {
      outOfOrderCounter++;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
    }
  }
  return outOfOrderCounter <= 1
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2])) 