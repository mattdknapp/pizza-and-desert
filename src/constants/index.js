export const pi = 3.14159

export const cheeseOptions = [
  { label: "Vegan", value: 0.017 },
  { label: "Mozzarella", value: 0.009 },
  { label: "3 Cheese", value: 0.0107 },
]

export const crustOptions = [
  { label: "Cauliflower", value: 0.0299 },
  { label: "Neapolitan", value: 0.0209 },
  { label: "New York", value: 0.0253 },
  { label: "Chicago", value: 0.03 },
]

export const toppings = {
  "Pepperoni": 0.012,
  "Extra Cheese": 0.009,
  "Sausage & Peppers": 0.015,
  "Spinage Alfredo": 0.0115,
}

export const toppingsOptions = Object
  .entries(toppings)
  .map(([label, value]) => ({ label, value }))
