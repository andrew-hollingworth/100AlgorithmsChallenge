function alternatingSums(a: number[]): number[] {
  let teamOneSum = 0
  let teamTwoSum = 0

  for (let i = 0; i < a.length; i += 1) {
    i % 2 === 0 ? teamOneSum += a[i] : teamTwoSum += a[i]
  }

  return [teamOneSum, teamTwoSum]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))