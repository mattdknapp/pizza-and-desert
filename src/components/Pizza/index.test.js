import userEvent from "@testing-library/user-event"
import { act, render, screen, getByRole, fireEvent } from '@testing-library/react'

import PizzaCalculator from "."
import { pi, crust, toppings, cheese } from "../../constants"

/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */

const [cheeseName, cheeseValue] = Object.entries(cheese)[0]
const [crustName, crustValue] = Object.entries(crust)[0]
const [toppingName, toppingValue] = Object.entries(toppings)[0]

describe("PizzaCalculator", () => {
  it("renders the pizza form", () => {
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

  it("calculates the total of the pizza cost", async () => {
    render(<PizzaCalculator />)

    await act(async () => {
      const cheeseSelector = screen.getByTestId("cheese")
      fireEvent.mouseDown(getByRole(cheeseSelector, "button"))
    })

    await act(async () => {
      const chosenCheese = await screen.findByText(cheeseName)
      chosenCheese.click()
    })

    await act(async () => {
      const crustSelector = screen.getByTestId("crust")
      fireEvent.mouseDown(getByRole(crustSelector, "button"))
    })

    await act(async () => {
      const chosenCrust = await screen.findByText(crustName)
      chosenCrust.click()
    })

    await act(async () => {
      const chosenTopping = await screen.findByLabelText(toppingName)
      chosenTopping.click()
    })

    await act(async () => {
      const quantityInput = await screen.findByLabelText("Quantity")
      userEvent.type(quantityInput, "0")
    })

    const area = pi * (6 * 6)
    const total = area * (cheeseValue + crustValue + toppingValue) * 10
    const text = `$${total.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })}`

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
