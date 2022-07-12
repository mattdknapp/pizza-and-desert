import { useCallback } from "react"
import TextField from "@mui/material/TextField"

import { strToNumber } from "../../lib/filters"
import { numericFormatter } from "../../lib/formatters"

const isNumeric = new RegExp(/^[\d|\.|,]*$/)

const DiameterInput = ({ formik }) => {
  const { setFieldValue } = formik

  const handleChange = useCallback(e => {
    if (isNumeric.test(e.target.value)) {
      const numberVal = strToNumber(e.target.value)
      setFieldValue("diameter", numberVal)
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
      value={numericFormatter(formik.values.diameter)}
    />
  )
}

export default DiameterInput
