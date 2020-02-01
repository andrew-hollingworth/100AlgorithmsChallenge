// QUESTIONS: 

// PSEUDOCODE:
// START PROGRAM 
//   SET a variable called "product" equal to the product of the first two elements of the Array.
//   ITERATE over the Array, starting from the second element (index 1)
//     Find the product of the current element and the following Element
//     IF the current product is greater than 'product', set 'product' = current.
//     END if
//   end iterate
//   Return 'product'
// END PROGRAM


function adjacentElementsProduct(inputArray: number[]): number {
  let highestProduct = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i += 1) {
    let currentProduct = inputArray[i] * inputArray[i + 1]
    currentProduct > highestProduct ? highestProduct = currentProduct : '';
  }
  return highestProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3, 5, 8, 2, 22]));