import * as Yup from "yup"
import { useFormik } from "formik"
import Grid from "@mui/material/Grid"

import Total from "../shared/Total"
import CrustSelect from "./CrustSelect"
import CheeseSelect from "./CheeseSelect"
import DiameterInput from "./DiameterInput"
import ToppingsPicker from "./ToppingsPicker"
import { getPizzaFromParams } from "../../lib/paramsParser"
import { calculatePieCost } from "../../lib/pizzaCalculator"

const pizzaSchema = Yup.object().shape({
  crust: Yup.number().required(),
  cheese: Yup.number().required(),
  diameter: Yup.number().required(),
  quantity: Yup.number().required(),
  toppings: Yup.array().of(Yup.string()),
})


const PizzaCalculator = props => {
  const formik = useFormik({
    initialValues: getPizzaFromParams(),
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
      <Grid item xs={8}>
      </Grid>
      <Grid item xs={4}>
        <Total value={calculatePieCost(formik.values)} />
      </Grid>
    </Grid>
  )
}

export default PizzaCalculator
