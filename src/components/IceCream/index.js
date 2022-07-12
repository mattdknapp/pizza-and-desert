import * as Yup from "yup"
import { useFormik } from "formik"
import Grid from "@mui/material/Grid"

import Total from "../shared/Total"
import MilkInput from "./MilkInput"
import VolumeInput from "./VolumeInput"
import FlavorSelect from "./FlavorSelect"
import { getIceCreamFromParams } from "../../lib/paramsParser"
import { calculateIceCreamCost } from "../../lib/iceCreamCalculator"

const iceCreamSchema = Yup.object().shape({
  milk: Yup.number().required().positive(),
  volume: Yup.number().required().positive(),
  flavor: Yup.string().required(),
})

const IceCream = () => {
  const formik = useFormik({
    initialValues: getIceCreamFromParams(),
    validationSchema: iceCreamSchema,
  })

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <VolumeInput formik={formik} />
      </Grid>
      <Grid item xs={4}>
        <MilkInput formik={formik} />
      </Grid>
      <Grid item xs={4}>
        <FlavorSelect formik={formik} />
      </Grid>
      <Grid item xs={4}>
        <Total value={calculateIceCreamCost(formik.values)} />
      </Grid>
      <Grid item xs={8} />
    </Grid>
  )
}

export default IceCream
