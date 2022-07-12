import Select from "./shared/Select"
import { skus } from "../constants"

const skuOptions = skus.map(sku => ({ value: sku }))
const SKUSelector = ({ formik }) => {
  return <Select options={skuOptions} formik={formik} name="sku" label="SKU" />
}

export default SKUSelector
