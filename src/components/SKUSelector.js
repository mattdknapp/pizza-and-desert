import Select from "./shared/Select"

const skus = [
  { label: "Ice Cream", value: "iceCream" },
  { label: "Pizza", value: "pizza"},
]

const SKUSelector = ({ formik }) => {
  return <Select options={skus} formik={formik} name="sku" label="SKU" />
}

export default SKUSelector
