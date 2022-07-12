import NumericInput from "../shared/NumericInput"
import { wholeNumberAmount } from "../../lib/formatters"

const QuantityInput = ({ formik }) => {
  return (
    <NumericInput
      label="Quantity"
      name="quantity"
      formik={formik}
      formatter={wholeNumberAmount}
    />
  )
}

export default QuantityInput
