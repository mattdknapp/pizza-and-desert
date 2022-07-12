import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import App from './App'
import { flavors, pizzaIngredients } from "../constants"

describe('App', () => {
  it('renders the SKU selector', () => {
    render(<App />)
    const skuSelector = screen.getByText("SKU")
    expect(skuSelector).toBeInTheDocument()
  })

  it('renders the PizzaCalculator when the appropriate SKU is selected', async () => {
    render(<App />)

    const skuSelector = screen.getByRole("button")
    fireEvent.mouseDown(skuSelector)
    
    const pizzaOption = await screen.findByText("Pizza")
    pizzaOption.click()

    await waitFor(() => {
      Object.keys(pizzaIngredients).forEach(async ingredient => {
        const ingredientElement = await screen.findByText(ingredient)
        expect(ingredientElement).toBeInTheDocument()
      })
    })
  })

  it('renders the IceCreamCalculator when the appropriate SKU is selected', async () => {
    render(<App />)

    const skuSelector = screen.getByRole("button")
    fireEvent.mouseDown(skuSelector)
    
    const iceCreamOption = await screen.findByText("Ice cream")
    iceCreamOption.click()

    await waitFor(() => {
      Object.keys(flavors).forEach(async ingredient => {
        const ingredientElement = await screen.findByText(ingredient)
        expect(ingredientElement).toBeInTheDocument()
      })
    })
  })
})
