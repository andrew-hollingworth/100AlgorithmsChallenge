function addBorder(picture: string[]): string[] {
  let top: string = '**';
  for (let i = 0; i < picture[0].length; i++) {
    top += '*'
  }
  let borderPicture = []

  picture.forEach((line) => {
    line = "*" + line + "*"
    borderPicture.push(line)
  })

  borderPicture.unshift(top)
  borderPicture.push(top)

  return borderPicture
}


console.log(addBorder(["abc", "ded"]));
