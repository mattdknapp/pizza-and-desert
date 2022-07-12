import NumericInput from "../shared/NumericInput"

const DiameterInput = ({ formik }) => {
  return (
    <NumericInput label="Size (in inches)" name="diameter" formik={formik} />
  )
}

export default DiameterInput
