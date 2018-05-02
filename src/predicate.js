export const isDivisibleBy = divisor => number => number % divisor == 0

export const numberContains = value => number =>
  number.toString().includes(value.toString())

export const or = (...predicates) => number =>
  predicates.find(predicate => predicate(number))

export const and = (...predicates) => number =>
  predicates.every(predicate => predicate(number))
