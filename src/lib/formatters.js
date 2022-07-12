export const numericFormatter = str => {
  if (!str) return ""
  const safeStr = String(str).split("").filter(n => !isNaN(Number(n))).join("")
  const numb = Number(safeStr)
  if (isNaN(numb)) return "0"
  return numb.toLocaleString()
}

export const formatDollarAmount = numb => {
  const rounded = Number(numb.toFixed(2))
  return `$${rounded.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
}
