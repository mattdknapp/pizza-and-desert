import { useFormik } from "formik"
import Grid from "@mui/material/Grid"

import MilkInput from "./MilkInput"
import VolumeInput from "./VolumeInput"
import FlavorSelect from "./FlavorSelect"

const IceCream = () => {
  const formik = useFormik({
    initialValues: {
      volume: 1,
      flavor: "",
      milk: 1.00,
    },
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
    </Grid>
  )
}

export default IceCream
