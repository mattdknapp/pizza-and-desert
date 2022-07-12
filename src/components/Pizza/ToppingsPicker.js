import { useMemo } from "react"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

import { toppingsOptions } from "../../constants"


const ToppingCheckbox = ({ formik, topping, label }) => {
  const { values } = formik
  const toppings = values?.toppings
  const checked = useMemo(() => {
    const safeToppings = toppings || []
    return safeToppings.includes(topping.label)
  }, [toppings, topping])

  return (
    <FormControlLabel
      name="toppings"
      label={topping.label}
      value={topping.label}
      onChange={formik.handleChange}
      control={<Checkbox checked={checked} />}
    />
  )
}

const ToppingsPicker = ({ formik }) => {
  return (
    <FormGroup row>
      {toppingsOptions.map(topping => {
        return (
          <ToppingCheckbox key={topping.label} formik={formik} topping={topping} />
        )
      })}
    </FormGroup>
  )
}

export default ToppingsPicker
