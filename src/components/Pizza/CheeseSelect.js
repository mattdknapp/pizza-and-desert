import Select from "../shared/Select"
import { cheeseOptions } from "../../constants"

const CheeseSelect = ({ formik }) => {
  return <Select options={cheeseOptions} formik={formik} name="cheese" />
}

export default CheeseSelect
