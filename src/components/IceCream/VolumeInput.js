import NumericInput from "../shared/NumericInput"

const VolumeInput = ({ formik }) => {
  return (
    <NumericInput label="Volume (in gallons)" name="volume" formik={formik} />
  )
}

export default VolumeInput
