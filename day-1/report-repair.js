const calculate = (input = []) => {
  const match = input.find((number) => {
    return input.includes(2020 - number)
  })

  return match * (2020 - match)
}

module.exports = {
  calculate,
}
