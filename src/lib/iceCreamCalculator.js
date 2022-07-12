import { flavors } from "../constants"

export const calculateIceCreamCost = opts => {
  const {
    milk,
    volume,
    flavor,
  } = opts

  const milkCost = 3 * milk * volume
  const flavorCost = volume * (flavors[flavor] || 0)
  return milkCost + flavorCost
}
