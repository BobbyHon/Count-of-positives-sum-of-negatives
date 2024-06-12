function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) return []
    return [input.filter((x) => x > 0).length, input.filter((x) => x < 0).reduce((sum, x) => sum + x, 0)]
  }