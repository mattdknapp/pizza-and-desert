import { useFormik } from "formik"
import Grid from "@mui/material/Grid"
import styled from "styled-components"
import Paper from "@mui/material/Paper"
import Container from "@mui/material/Container"

import PizzaCalculator from "./Pizza"
import SKUSelector from "./SKUSelector"
import IceCreamCalculator from "./IceCream"
import { getSKUFromParams } from "../lib/paramsParser"

const StyledContainer = styled(Container)`
  margin-top: 10%;
`

const StyledPaper = styled(Paper)`
  padding: 20px;
`

const Calculator = ({ sku }) => {
  switch(sku) {
    case "Pizza":
      return <PizzaCalculator />
    case "Ice Cream":
      return <IceCreamCalculator />
    default:
      return null
  }
}

const App = () => {
  const formik = useFormik({
    initialValues: getSKUFromParams(),
  })

  return (
    <StyledContainer maxWidth="md">
      <StyledPaper>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <SKUSelector formik={formik} />
          </Grid>
          <Grid item xs={8}/>
          <Grid item xs={12}>
            <Calculator sku={formik.values.sku}/>
          </Grid>
        </Grid>
      </StyledPaper>
    </StyledContainer>
  );
}

export default App
