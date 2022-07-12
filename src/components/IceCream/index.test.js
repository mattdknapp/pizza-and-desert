import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import IceCreamCalculator from "."
import { flavors } from "../../constants"

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
})
