function alphabetSubsequence(s: string): boolean {
  const alphabet: object = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
  }

  let alphaValue = alphabet[s[0]]

  for (let i = 1; i < s.length; i++) {
    if (alphaValue < alphabet[s[i]] && i === s.length - 1) {
      return true
    } else if (alphaValue < alphabet[s[i]]) {
      alphaValue = alphabet[s[i]]
    } else {
      return false
    }
  }

}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
