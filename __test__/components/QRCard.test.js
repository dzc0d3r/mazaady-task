import React from "react"
import renderer from "react-test-renderer"
import { render, screen, fireEvent } from "@testing-library/react"
import { QRCard } from "@/components/Profile"

describe("QRCard Component", () => {
  it("renders QRCard component correctly", () => {
    // snapshot test
    const tree = renderer.create(<QRCard />).toJSON()
    expect(tree).toMatchSnapshot()

    // Check if the component is rendered
    render(<QRCard />)
    const qrCardTitle = screen.getByText("QR Code")
    expect(qrCardTitle).toBeInTheDocument()

    // Check if the checkbox is rendered
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()

    // Check if the default collapse state is not collapsed
    const qrCodeContent = screen.getByText(
      "Download the QR code or share it with your friends.",
    )
    expect(qrCodeContent).toBeInTheDocument()
  })

  it("toggles collapse state when checkbox is clicked", () => {
    render(<QRCard />)

    // Check if the component is initially not collapsed
    let qrCodeContent = screen.getByText(
      "Download the QR code or share it with your friends.",
    )
    expect(qrCodeContent).toBeInTheDocument()

    // Click the checkbox to collapse the component
    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)

    // Check if the component is collapsed after clicking the checkbox
    qrCodeContent = screen.queryByText(
      "Download the QR code or share it with your friends.",
    )
    const parentOfParent = qrCodeContent.parentElement?.parentElement
    expect(parentOfParent).toHaveClass("hidden")
  })

  it("renders the QR image when not collapsed", () => {
    render(<QRCard />)

    // Check if the QR image is initially rendered
    const qrImage = screen.getByAltText("Profile image")
    expect(qrImage).toBeInTheDocument()
  })

  it("does not render the QR image when collapsed", () => {
    render(<QRCard />)

    // Click the checkbox to collapse the component
    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)

    // Check if the QR image is not rendered after collapsing
    const qrImage = screen.queryByAltText("Profile image")
    const parentOfParent = qrImage.parentElement?.parentElement
    expect(parentOfParent).toHaveClass("hidden")

    // Add more tests as needed based on your component's behavior
  })
})
