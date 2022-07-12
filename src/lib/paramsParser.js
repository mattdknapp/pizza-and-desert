const getParams = () => new URLSearchParams(window.location.search)

export const getSKUFromParams = () => {
  const params = getParams()
  return {
    sku: params.get("sku") || "",
  }
}

export const getPizzaFromParams = () => {
  const params = getParams()

  const toppingsParams = params.get("toppings") || ""
  const toppings = toppingsParams.split(",")
  return {
    toppings,
    crust: params.get("crust") || "",
    cheese: params.get("cheese") || "",
    quantity: params.get("quantity") || 1,
    diameter: params.get("diameter") || 12,
  }
}

export const getIceCreamFromParams = () => {
  const params = getParams()

  return {
    milk: params.get("milk") || 2.12,
    volume: params.get("volume") || 1,
    flavor: params.get("flavor") || "",
  }
}
