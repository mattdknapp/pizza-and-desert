export const pi = 3.14159

const createSelectOptions = items => Object
  .entries(items)
  .map(([label, value]) => ({ label, value: label }))

export const skus = [
  "Pizza",
  "Ice Cream",
]

export const cheese = {
  "Vegan": 0.017,
  "Mozzarella": 0.009,
  "3 Cheese": 0.0107,
}

export const crust = {
  "Cauliflower": 0.0299,
  "Neapolitan": 0.0209,
  "New York": 0.0253,
  "Chicago": 0.03,
}

export const toppings = {
  "Pepperoni": 0.012,
  "Extra Cheese": 0.009,
  "Sausage & Peppers": 0.015,
  "Spinage Alfredo": 0.0115,
  "Buffalo Chicken": 0.017,
}

export const toppingsOptions = createSelectOptions(toppings)
export const cheeseOptions = createSelectOptions(cheese)
export const crustOptions = createSelectOptions(crust)
export const pizzaIngredients = {
  ...cheese,
  ...crust,
  ...toppings,
}

const baseFlavors = {
  "Chocolate": 0.97,
  "Vanilla": 0.45,
  "Strawberry": 0.63,
}

const calculateNeapolitan = (acc, next) => {
  return acc + next
}

export const flavors = {
  ...baseFlavors,
  "Neapolitan": Object.values(baseFlavors).reduce(calculateNeapolitan, 0),
}

export const flavorOptions = createSelectOptions(flavors)
