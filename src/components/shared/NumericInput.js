import { useCallback } from "react"
import TextField from "@mui/material/TextField"

import { strToNumber } from "../../lib/filters"
import { numericFormatter } from "../../lib/formatters"

const isNumeric = new RegExp(/^[\d.,]*$/)

const NumericInput = ({ name, label, formik }) => {
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
      setFieldTouched(name, true)
      setFieldValue(name, numberVal)
    }
  }, [name, setFieldTouched, setFieldValue])

  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      label={label}
      variant="standard"
      onChange={handleChange}
      helperText={errors[name]}
      value={numericFormatter(values[name])}
      error={touched[name] && Boolean(errors[name])}
    />
  )
}

export default NumericInput
