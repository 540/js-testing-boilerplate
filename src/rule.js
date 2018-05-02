export default (predicate, replacement) => ({
  isSatisfiedBy: number => predicate(number),
  replacement: () => replacement
})
