import NumericInput from "../shared/NumericInput"

const MilkInput = ({ formik }) => {
  return (
    <NumericInput label="Wholesale Milk Price" name="milk" formik={formik} />
  )
}

export default MilkInput
