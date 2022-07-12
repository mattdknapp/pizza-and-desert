import Select from "../shared/Select"
import { flavorOptions } from "../../constants"

const FlavorSelect = ({ formik }) => {
  return <Select options={flavorOptions} formik={formik} name="flavor" />
}

export default FlavorSelect
