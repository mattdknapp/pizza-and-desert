import Select from "../shared/Select"
import { crustOptions } from "../../constants"

const CrustSelect = ({ formik }) => {
  return <Select options={crustOptions} formik={formik} name="crust" />
}

export default CrustSelect
