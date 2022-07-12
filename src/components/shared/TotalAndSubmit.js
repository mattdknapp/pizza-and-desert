import styled from "styled-components"
import Button from "@mui/material/Button"

import { formatDollarAmount } from "../../lib/formatters"

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Total = ({ value }) => {
  return (
    <div>
      <span>Total: </span>
      {formatDollarAmount(value)}
    </div>
  )
}

const TotalAndSubmit = ({ value, onSubmit, calculate }) => {
  return (
    <TotalWrapper>
      <Total value={value} />
      <Button onClick={onSubmit} color="primary" variant="contained" type="submit">
        Share
      </Button>
    </TotalWrapper>
  )
}

export default TotalAndSubmit
