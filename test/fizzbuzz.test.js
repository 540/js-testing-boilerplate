import { fizzbuzz, fizzbuzz_list } from '../src/fizz-buzz'

describe('Fizz Buzz', () => {
  describe('single number', () => {
    [
      [1, '1'],
      [2, '2'],
      [3, 'Fizz'],
      [6, 'Fizz'],
      [5, 'Buzz'],
      [10, 'Buzz'],
      [15, 'FizzBuzz'],
      [45, 'FizzBuzz']
    ].forEach(params => {
      const input = params[0], expected = params[1];

      it('gives answer ' + expected + ' for ' + input, () => {
        expect(fizzbuzz(input)).toEqual(expected)
      })
    })
  })

  describe('numbers until', () => {
    [
      [1, '1'],
      [2, '1,2'],
      [3, '1,2,Fizz']
    ].forEach(params => {
      const input = params[0], expected = params[1]

      it('' + input, () => {
        expect(fizzbuzz_list(input)).toEqual(expected)
      })
    })
  })
})
