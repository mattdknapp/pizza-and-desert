const getParams = () => new URLSearchParams(window.location.search)

export const getSKUFromParams = () => {
  const params = getParams()
  return params.get("sku")
}

export const getPizzaFromParams = () => {
  const params = getParams()

  return {
    crust: params.get("crust") || 0,
    cheese: params.get("cheese") || 0,
    diameter: params.get("diameter") || 12,
    toppings: params.get("toppings") || [],
  }
}
