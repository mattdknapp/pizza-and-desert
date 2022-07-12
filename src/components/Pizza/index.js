import * as Yup from "yup"
import { useFormik } from "formik"
import Grid from "@mui/material/Grid"

import CrustSelect from "./CrustSelect"
import CheeseSelect from "./CheeseSelect"
import DiameterInput from "./DiameterInput"
import ToppingsPicker from "./ToppingsPicker"
import { formatDollarAmount } from "../../lib/formatters"
import { calculatePieCost } from "../../lib/pizzaCalculator"

const pizzaSchema = Yup.object().shape({
  crust: Yup.number().required(),
  cheese: Yup.number().required(),
  diameter: Yup.number().required(),
  toppings: Yup.array().of(Yup.string()),
})


const PizzaCalculator = props => {
  const formik = useFormik({
    initialValues: {
      crust: 0,
      cheese: 0,
      diameter: 12,
      toppings: [],
    },
    validationSchema: pizzaSchema,
  })

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <DiameterInput formik={formik} />
      </Grid>
      <Grid item xs={4}>
        <CheeseSelect formik={formik} />
      </Grid>
      <Grid item xs={4}>
        <CrustSelect formik={formik} />
      </Grid>
      <Grid item xs={12}>
        <ToppingsPicker formik={formik} />
      </Grid>
      <Grid item xs={12}>
        <div>{formatDollarAmount(calculatePieCost(formik.values))}</div>
      </Grid>
    </Grid>
  )
}

export default PizzaCalculator
