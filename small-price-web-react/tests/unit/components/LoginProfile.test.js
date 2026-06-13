import { fireEvent, render, screen, within } from "@testing-library/react"
import LoginProfile from "../../../src/components/LoginProfile.jsx"
import { fakeUser } from "../../../src/features/auth/fakeUser.js"
import { getInitials } from "../../../src/features/auth/authUtils.js"

describe("LoginProfile UI", () => {
  function submitLoginForm(email, password) {
    const loginForm = screen.getByRole("form", { name: "Login form" })

    fireEvent.change(within(loginForm).getByLabelText("Email"), {
      target: { value: email },
    })
    fireEvent.change(within(loginForm).getByLabelText("Password"), {
      target: { value: password },
    })
    fireEvent.click(within(loginForm).getByRole("button", { name: "Log in" }))
  }

  test("shows the login modal when the Log in button is clicked", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: "Log in" }))

    expect(screen.getByText("Log in to Small Price")).toBeInTheDocument()
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
  })

  test("shows an error message when login details are wrong", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: "Log in" }))
    submitLoginForm(fakeUser.email, "wrong-password")

    expect(screen.getByText("Email or password is incorrect.")).toBeInTheDocument()
    expect(screen.queryByText(fakeUser.name)).not.toBeInTheDocument()
  })

  test("logs in when the email and password are correct", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: "Log in" }))
    submitLoginForm(fakeUser.email, fakeUser.password)

    expect(screen.queryByText("Log in to Small Price")).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: fakeUser.name })).toBeInTheDocument()
    expect(screen.getByText(getInitials(fakeUser.name))).toBeInTheDocument()
  })

  test("shows the logged-in account modal and logs out", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: "Log in" }))
    submitLoginForm(fakeUser.email, fakeUser.password)

    fireEvent.click(screen.getByRole("button", { name: fakeUser.name }))

    expect(screen.getByText("Your account")).toBeInTheDocument()
    expect(screen.getByText(fakeUser.email)).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", { name: "Log out" }))

    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument()
    expect(screen.queryByText("Your account")).not.toBeInTheDocument()
  })

  test("closes the modal when the close button is clicked", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: "Log in" }))
    fireEvent.click(screen.getByRole("button", { name: "Close login modal" }))

    expect(screen.queryByText("Log in to Small Price")).not.toBeInTheDocument()
  })
})
