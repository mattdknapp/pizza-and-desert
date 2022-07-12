import { useFormik } from "formik"
import userEvent from "@testing-library/user-event"
import { act, render, screen } from "@testing-library/react"

import NumericInput from "./NumericInput"

/* eslint-disable testing-library/no-unnecessary-act */

const defaults = {
  name: "testName",
  label: "Test Name",
}

const defaultValues = {
  testName: 20.012
}

const Wrapper = (opts = {}) => {
  const {
    props = defaults,
    initialValues = defaultValues,
  } = opts

  const formik = useFormik({
    initialValues,
  })

  return (
    <NumericInput formik={formik} {...props}/>
  )
}

describe("NumericInput", () => {
  it("renders using the coresponding formik value", async () => {
    render(<Wrapper />)

    const label = await screen.findByText(defaults.label)
    expect(label).toBeInTheDocument()

    const valueStr = defaultValues.testName.toString()
    expect(screen.getByDisplayValue(valueStr)).toBeInTheDocument()
  })

  it("updates the value when a numeric value is entered", async () => {
    const value = "1337"
    render(<Wrapper />)

    const valueStr = defaultValues.testName.toString()
    const input = screen.getByDisplayValue(valueStr)
    
    await act(async () => userEvent.type(input, value))
    const expected = `${defaultValues.testName.toString()}${value}`
    expect(screen.getByDisplayValue(expected)).toBeInTheDocument()
  })

  it("ignored invalid inputs", async () => {
    render(<Wrapper />)
    const valueStr = defaultValues.testName.toString()
    const input = screen.getByDisplayValue(valueStr)
    
    // Extra dot
    await act(async () => userEvent.type(input, "."))
    expect(screen.getByDisplayValue(valueStr)).toBeInTheDocument()

    // Letters
    await act(async () => userEvent.type(input, "abcEFG"))
    expect(screen.getByDisplayValue(valueStr)).toBeInTheDocument()
  })
})
