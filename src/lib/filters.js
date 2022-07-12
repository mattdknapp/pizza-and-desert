export const strToNumber = str => String(str)
  .split("")
  .filter(n => !isNaN(Number(n)) || n === '.')
  .join("")
