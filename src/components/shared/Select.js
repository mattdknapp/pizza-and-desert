import { capitalize } from "lodash"
import MUISelect from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"

const getLabel = (alt, label) => {
  if (label) return label
  return capitalize(alt)
}

const Select = ({ options, formik, name, label }) => {
  const safeLabel = getLabel(name, label)
  const { values, handleChange } = formik

  return (
    <FormControl fullWidth>
        <MUISelect
          id={name}
          name={name}
          label={safeLabel}
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
