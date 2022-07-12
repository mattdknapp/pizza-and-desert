import { strToNumber } from "./filters"

const localeStringOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}
const toTwoDecimals = numb => numb.toLocaleString(undefined, localeStringOptions)

export const numericFormatter = str => {
  if (!str) return ""
  return toTwoDecimals(strToNumber(str))
}

export const longDollarAmount = numb => {
  return `$${numb.toLocaleString()}`
}

export const formatDollarAmount = numb => {
  return `$${toTwoDecimals(numb)}`
}
