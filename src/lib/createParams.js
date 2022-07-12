export const createParams = sku => obj => {
  const url = new URL(window.location.origin)
  url.searchParams.set("sku", sku)

  Object.entries(obj).forEach(([key, value]) => {
    url.searchParams.set(key, value)
  })

  window.history.pushState({}, '', url)
}
