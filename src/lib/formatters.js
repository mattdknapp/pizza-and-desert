import { strToNumber } from "./filters"

const toTwoDecimals = numb => numb.toLocaleString(undefined, { minimumFractionDigits: 2 })

export const numericFormatter = str => {
  if (!str) return ""
  return toTwoDecimals(strToNumber(str))
}

export const formatDollarAmount = numb => {
  return `$${toTwoDecimals(numb)}`
}
