import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import PizzaCalculator from "."
import { toppings, pizzaIngredients } from "../../constants"

describe("PizzaCalculator", () => {
  it.only("renders the pizza form", () => {
    render(<PizzaCalculator />)
    const checkForTextPresence = txt => {
      expect(screen.getByText(txt)).toBeInTheDocument()
    }

    [
      "Crust",
      "Cheese",
      "Size (in inches)",
      "Total:",
    ].forEach(checkForTextPresence)


    Object.keys(toppings).forEach(checkForTextPresence)
  })
})
