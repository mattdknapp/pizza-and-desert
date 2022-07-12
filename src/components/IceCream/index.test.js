import userEvent from "@testing-library/user-event"
import { act, render, screen, getByRole, fireEvent } from '@testing-library/react'

import IceCreamCalculator from "."
import { flavors } from "../../constants"

/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */

const [flavorName, flavorValue] = Object.entries(flavors)[0]

const checkCost = (volume, milk, flavor) => {
  const cost = volume * ((3 * milk) + flavor)
  const expectedString = cost.toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })

  expect(screen.getByText(`$${expectedString}`)).toBeInTheDocument()
}

describe("IceCreamCalculator", () => {
  it("renders the ice cream form", () => {
    render(<IceCreamCalculator />)
    const checkForTextPresence = txt => {
      expect(screen.getByText(txt)).toBeInTheDocument()
    }

    [
      "Volume (in gallons)",
      "Wholesale Milk Price",
      "Flavor",
      "Total:",
    ].forEach(checkForTextPresence)
  })

  it("calculates the total of the ice cream cost", async () => {
    render(<IceCreamCalculator />)

    await act(async () => {
      const flavorSelector = screen.getByTestId("flavor")
      fireEvent.mouseDown(getByRole(flavorSelector, "button"))
    })

    await act(async () => {
      const chosenFlavor = await screen.findByText(flavorName)
      chosenFlavor.click()
    })

    checkCost(1, 2.12, flavorValue)

    await act(async () => {
      const volumeInput = screen.getByLabelText("Volume (in gallons)")
      userEvent.type(volumeInput, "0")
    })

    checkCost(10, 2.12, flavorValue)
  })

  it("updates the query params when submitted", async () => {
    render(<IceCreamCalculator />)

    await act(async () => {
      const flavorSelector = screen.getByTestId("flavor")
      fireEvent.mouseDown(getByRole(flavorSelector, "button"))
    })

    await act(async () => {
      const chosenFlavor = await screen.findByText(flavorName)
      chosenFlavor.click()
    })

    await act(async () => {
      const shareButton = await screen.findByText("Share")
      shareButton.click()
    })

    const params = new URLSearchParams(window.location.search)
    expect(params.get("sku")).toBe("Ice Cream")
    expect(params.get("flavor")).toBe(flavorName)
    expect(params.get("milk")).toBe("2.12")
  })
})
