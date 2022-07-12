import { useCallback } from "react"
import TextField from "@mui/material/TextField"

import { strToNumber } from "../../lib/filters"
import { numericFormatter } from "../../lib/formatters"

const isNumeric = new RegExp(/^[\d|,]*$/)

const DiameterInput = ({ formik }) => {
  const {
    errors,
    values,
    touched,
    setFieldValue,
    setFieldTouched,
  } = formik

  const handleChange = useCallback(e => {
    if (isNumeric.test(e.target.value)) {
      const numberVal = strToNumber(e.target.value)
      setFieldTouched("diameter", true)
      setFieldValue("diameter", numberVal)
    }
  }, [setFieldTouched, setFieldValue])

  return (
    <TextField
      fullWidth
      id="diameter"
      name="diameter"
      variant="standard"
      onChange={handleChange}
      label="Size (in inches)"
      helperText={errors.diameter}
      value={numericFormatter(values.diameter)}
      error={touched.diameter && Boolean(errors.diameter)}
    />
  )
}

export default DiameterInput
