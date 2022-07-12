import { useCallback } from "react"
import TextField from "@mui/material/TextField"

import { strToNumber } from "../../lib/filters"
import { numericFormatter } from "../../lib/formatters"

const isNumeric = new RegExp(/^[\d.,]*$/)

const removeSpuriousPeriods = strValue => {
  return strValue.replace(/(?<=\.\d*)\./g, "")
}

const NumericInput = ({
  name,
  label,
  formik,
  formatter = numericFormatter,
}) => {
  const {
    errors,
    values,
    touched,
    setFieldValue,
    setFieldTouched,
  } = formik

  const handleChange = useCallback(e => {
    const nonDollarVal = removeSpuriousPeriods(e.target.value.replace("$", ""))
    if (isNumeric.test(nonDollarVal)) {
      const numberVal = strToNumber(nonDollarVal)
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
      value={formatter(values[name])}
      error={touched[name] && Boolean(errors[name])}
    />
  )
}

export default NumericInput
