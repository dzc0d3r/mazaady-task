import { render, screen } from "@testing-library/react"
import { ProfileCard } from "@/components/Profile"
import { profileData } from "@/lib/data"
import renderer from "react-test-renderer"

describe("ProfileCard", () => {
  const mockProps = { ...profileData }

  it("renders correctly", () => {
    const tree = renderer.create(<ProfileCard {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders the profile information", () => {
    render(<ProfileCard {...mockProps} />)
    expect(screen.getByText(`${mockProps.fullname}`)).toBeInTheDocument()
    expect(screen.getByText(`${mockProps.bio}`)).toBeInTheDocument()
    expect(screen.getByText(`${mockProps.followers}`)).toBeInTheDocument()
    expect(screen.getByText("followers")).toBeInTheDocument()
    expect(screen.getByText(`${mockProps.following}`)).toBeInTheDocument()
    expect(screen.getByText("following")).toBeInTheDocument()
    expect(screen.getByText(`${mockProps.rate.value}`)).toBeInTheDocument()
    expect(screen.getByText(`${mockProps.rate.count}`)).toBeInTheDocument()
  })

  it("renders the follow button", () => {
    render(<ProfileCard {...mockProps} />)
    expect(screen.getByText("Follow")).toBeInTheDocument()
  })
})
