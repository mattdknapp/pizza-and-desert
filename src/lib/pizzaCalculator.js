import { toppings as toppingsOptions, pi } from "../constants"

const createCalculator = area => ingredient => {
  if (!ingredient || isNaN(Number(ingredient))) return 0
  return area * ingredient
}

const calculate = calculator => (total, ingredient) => {
  if (!ingredient) return 0
  if (Array.isArray(ingredient)) {
    return ingredient.reduce(calculate(calculator), total)
  }
  return total + calculator(ingredient)
}

const calculateToppings = (calculator, toppings) => {
  const values = toppings.map(topping => toppingsOptions[topping])
  return values.reduce(calculate(calculator), 0)
}

export const calculatePieCost = opts => {
  const {
    diameter,
    toppings,
    ...ingredients
  } = opts
  const radius = diameter / 2
  const area = pi * (radius * radius)
  const calculator = createCalculator(area)
  const toppingCost = calculateToppings(calculator, toppings)
  const ingredientsCost = Object.values(ingredients).reduce(calculate(calculator), 0)
  return toppingCost + ingredientsCost
}
