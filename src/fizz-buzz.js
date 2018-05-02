import rule from './rule'
import { and, isDivisibleBy, numberContains, or } from './predicate'

const rules = [
  rule(and(isDivisibleBy(3), isDivisibleBy(5)), 'FizzBuzz'),
  rule(or(numberContains(3), isDivisibleBy(3)), 'Fizz'),
  rule(or(numberContains(5), isDivisibleBy(5)), 'Buzz')
]

export const fizzbuzz = number =>
  rules
    .filter(rule => rule.isSatisfiedBy(number))
    .map(satisfiedRule => satisfiedRule.replacement())[0] || number.toString()

export const fizzbuzz_list = limit =>
  [...Array(limit).keys()].map(number => fizzbuzz(number + 1)).join(',')
