function alphabeticShift(inputString: string): string {
  const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let letters = inputString.split('');
  let newWord: string = ''
  letters.forEach((letter) => {
    let newIndex = alphabet.indexOf(letter) + 1
    newIndex === 26 ? newIndex = 0 : '';
    newWord += alphabet[newIndex]
  })

  return newWord

}

console.log(alphabeticShift('crazy'));