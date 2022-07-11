import { useCallback } from "react"
import TextField from "@mui/material/TextField"

const isNumeric = new RegExp(/^[\d|\.]*$/)

const DiameterInput = ({ formik }) => {
  const { setFieldValue } = formik

  const handleChange = useCallback(e => {
    if (isNumeric.test(e.target.value)) {
      setFieldValue("diameter", e.target.value)
    }
  }, [setFieldValue])

  return (
    <TextField
      fullWidth
      id="diameter"
      name="diameter"
      variant="standard"
      label="Size (in inches)"
      onChange={handleChange}
      value={formik.values.diameter}
    />
  )
}

export default DiameterInput
