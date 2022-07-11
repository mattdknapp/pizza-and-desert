import { useFormik } from "formik"
import Grid from "@mui/material/Grid"
import styled from "styled-components"
import Paper from "@mui/material/Paper"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"

import SKUSelector from "./SKUSelector"
import PizzaCalculator from "./Pizza"

const AppHeader = styled(Toolbar)`
  background-color: #33cccc;
`

function App() {
  const formik = useFormik({
    initialValues: {
      sku: "",
    },
  })

  return (
    <Container maxWidth="md">
      <Paper>
        {/*<AppHeader>Test</AppHeader>*/}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <SKUSelector formik={formik} />
          </Grid>
          <Grid item xs={8}/>
          <Grid item xs={12}>
            <PizzaCalculator />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App
