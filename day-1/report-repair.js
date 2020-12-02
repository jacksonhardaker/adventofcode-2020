const findPairBySum = (input = [], target = 2020) => {
  const match = input.find((number) => {
    return input.includes(target - number)
  })

  return match ? [match, target - match] : null
}

const calculateFromTwo = (input = []) => {
  const [a, b] = findPairBySum(input)
  return a * b
}

const calculateFromThree = (input = []) => {
  let b, c
  const a = input.find((number) => {
    const pair = findPairBySum(input, 2020 - number)

    if (pair) {
      [b, c] = pair
      return true
    }

    return false
  })

  return a * b * c
}

module.exports = {
  calculateFromTwo,
  calculateFromThree,
}
