import { formatDollarAmount } from "../../lib/formatters"

const Total = ({ value }) => {
  return (
    <div>
      <span>Total: </span>
      {formatDollarAmount(value)}
    </div>
  )
}

export default Total
