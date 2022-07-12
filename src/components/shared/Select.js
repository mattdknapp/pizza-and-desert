import { capitalize } from "lodash"
import { useCallback } from "react"
import MUISelect from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"

const getLabel = (alt, label) => {
  if (label) return label
  return capitalize(alt)
}

const Select = ({
  label,
  name,
  formik,
  options,
  fullWidth = true,
  variant = "standard",
}) => {
  const safeLabel = getLabel(name, label)
  const {
    errors,
    values,
    touched,
    handleChange,
    setFieldTouched,
  } = formik

  const handleBlur = useCallback(() => {
    setFieldTouched(name, true)
  }, [name, setFieldTouched])

  return (
    <FormControl
      variant={variant}
      fullWidth={fullWidth}
      error={touched[name] && Boolean(errors[name])}
    >
      <InputLabel>{safeLabel}</InputLabel>
      <MUISelect
        id={name}
        name={name}
        data-testid={name}
        onBlur={handleBlur}
        value={values[name]}
        onChange={handleChange}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {getLabel(option.value, option.label)}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  )
}

export default Select
