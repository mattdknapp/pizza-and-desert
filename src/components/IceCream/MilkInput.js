import NumericInput from "../shared/NumericInput"
import { longDollarAmount } from "../../lib/formatters"

const MilkInput = ({ formik }) => {
  return (
    <NumericInput
      name="milk"
      formik={formik}
      label="Wholesale Milk Price"
      formatter={longDollarAmount}
    />
  )
}

export default MilkInput
