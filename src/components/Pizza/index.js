import { useFormik } from "formik"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

import ToppingsPicker from "./ToppingsPicker"
import CheeseSelect from "./CheeseSelect"
import CrustSelect from "./CrustSelect"
import { calculatePieCost } from "../../lib/pizzaCalculator"

const PizzaCalculator = props => {
  const formik = useFormik({
    initialValues: {
      crust: 0,
      cheese: 0,
      diameter: 12,
      toppings: [],
    },
  })

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          fullWidth
          id="diameter"
          name="diameter"
          variant="standard"
          label="Size (in inches)"
          value={formik.values.diameter}
          onChange={formik.handleChange}
        />
        <div>{calculatePieCost(formik.values)}</div>
      </Grid>
      <Grid item xs={8}/>
      <Grid item xs={1}/>
      <Grid item xs={4}>
        <CheeseSelect formik={formik} />
      </Grid>
      <Grid item xs={2}/>
      <Grid item xs={4}>
        <CrustSelect formik={formik} />
      </Grid>
      <Grid item xs={1}/>
      <Grid item xs={1}/>
      <Grid item xs={6}>
        <ToppingsPicker formik={formik} />
      </Grid>
      <Grid item xs={1}/>
    </Grid>
  )
}

export default PizzaCalculator
