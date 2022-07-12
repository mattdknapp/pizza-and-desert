import { capitalize } from "lodash"
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
  const { values, handleChange } = formik

  return (
    <FormControl fullWidth={fullWidth} variant={variant}>
      <InputLabel>{safeLabel}</InputLabel>
        <MUISelect
          id={name}
          name={name}
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
