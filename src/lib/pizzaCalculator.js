import { pizzaIngredients, pi } from "../constants"

const createCalculator = area => ingredient => {
  const ingredientCost = pizzaIngredients[ingredient]
  if (!ingredientCost || isNaN(Number(ingredientCost))) return 0
  return area * ingredientCost
}

const calculate = calculator => (total, ingredient) => {
  if (!ingredient) return 0
  return total + calculator(ingredient)
}

const calculateToppings = (calculator, toppings) => {
  const total = toppings.reduce(calculate(calculator), 0)
  return total
}

export const calculatePieCost = opts => {
  const {
    diameter,
    toppings,
    quantity,
    ...ingredients
  } = opts
  const radius = diameter / 2
  const area = pi * (radius * radius)
  const calculator = createCalculator(area)
  const toppingCost = calculateToppings(calculator, toppings)
  const ingredientsCost = Object.values(ingredients).reduce(calculate(calculator), 0)
  const costPerPie = toppingCost + ingredientsCost

  return quantity * costPerPie
}
