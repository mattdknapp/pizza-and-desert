import * as Yup from "yup"
import { useFormik } from "formik"
import Grid from "@mui/material/Grid"

import CrustSelect from "./CrustSelect"
import CheeseSelect from "./CheeseSelect"
import DiameterInput from "./DiameterInput"
import QuantityInput from "./QuantityInput"
import ToppingsPicker from "./ToppingsPicker"
import TotalAndSubmit from "../shared/TotalAndSubmit"
import { createParams } from "../../lib/createParams"
import { getPizzaFromParams } from "../../lib/paramsParser"
import { calculatePieCost } from "../../lib/pizzaCalculator"

const pizzaSchema = Yup.object().shape({
  crust: Yup.string().required(),
  cheese: Yup.string().required(),
  diameter: Yup.number().required().positive(),
  quantity: Yup.number().required().positive(),
  toppings: Yup.array().of(Yup.string()),
})

const PizzaCalculator = () => {
  const formik = useFormik({
    initialValues: getPizzaFromParams(),
    validationSchema: pizzaSchema,
    onSubmit: createParams("Pizza"),
  })

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <DiameterInput formik={formik} />
      </Grid>
      <Grid item xs={6}>
        <QuantityInput formik={formik} />
      </Grid>
      <Grid item xs={6}>
        <CheeseSelect formik={formik} />
      </Grid>
      <Grid item xs={6}>
        <CrustSelect formik={formik} />
      </Grid>
      <Grid item xs={12}>
        <ToppingsPicker formik={formik} />
      </Grid>
      <Grid item xs={12}>
          <TotalAndSubmit
            value={calculatePieCost(formik.values)}
            onSubmit={formik.submitForm}
          />
      </Grid>
    </Grid>
  )
}

export default PizzaCalculator
