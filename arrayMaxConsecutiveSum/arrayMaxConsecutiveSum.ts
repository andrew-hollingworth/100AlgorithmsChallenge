// START PROGRAM
//   Set an empty variable called largestSum
//   ITERATE over the array from index 0 to inputArray's length - k
//     ITERATE through the array, K times.
//       Sum the entries in the array from i up to i+k.
//     END ITERATE
//     IF that currentSum > largestSum, then largestSum = currentSum.
//     END IF
//   END ITERATE
//   RETURN largest Sum
// END PROGRAM

function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let largestSum = 0
  for (let i = 0; i < (inputArray.length - k); i += 1) {
    let currentSum = 0;
    for (let j = 0; j < k; j += 1) {
      currentSum += inputArray[i + j]
      currentSum > largestSum ? largestSum = currentSum : '';
    }
  }
  return largestSum
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));