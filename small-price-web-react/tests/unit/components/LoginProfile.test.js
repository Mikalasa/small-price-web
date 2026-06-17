import { fireEvent, render, screen, within } from "@testing-library/react"
import LoginProfile from "../../../src/components/LoginProfile.jsx"
import { authCopy } from "../../../src/constants/copy.js"
import { fakeUser } from "../../../src/data/users.js"
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
    fireEvent.click(within(loginForm).getByRole("button", { name: authCopy.loginButton }))
  }

  test("shows the login modal when the Log in button is clicked", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: authCopy.loginButton }))

    expect(screen.getByText(authCopy.loginTitle)).toBeInTheDocument()
    expect(screen.getByLabelText(authCopy.emailLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(authCopy.passwordLabel)).toBeInTheDocument()
  })

  test("shows an error message when login details are wrong", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: authCopy.loginButton }))
    submitLoginForm(fakeUser.email, "wrong-password")

    expect(screen.getByText(authCopy.loginError)).toBeInTheDocument()
    expect(screen.queryByText(fakeUser.name)).not.toBeInTheDocument()
  })

  test("logs in when the email and password are correct", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: authCopy.loginButton }))
    submitLoginForm(fakeUser.email, fakeUser.password)

    expect(screen.queryByText(authCopy.loginTitle)).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: fakeUser.name })).toBeInTheDocument()
    expect(screen.getByText(getInitials(fakeUser.name))).toBeInTheDocument()
  })

  test("shows the logged-in account modal and logs out", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: authCopy.loginButton }))
    submitLoginForm(fakeUser.email, fakeUser.password)

    fireEvent.click(screen.getByRole("button", { name: fakeUser.name }))

    expect(screen.getByText(authCopy.profileTitle)).toBeInTheDocument()
    expect(screen.getByText(fakeUser.email)).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", { name: authCopy.logoutButton }))

    expect(screen.getByRole("button", { name: authCopy.loginButton })).toBeInTheDocument()
    expect(screen.queryByText(authCopy.profileTitle)).not.toBeInTheDocument()
  })

  test("closes the modal when the close button is clicked", () => {
    render(<LoginProfile />)

    fireEvent.click(screen.getByRole("button", { name: authCopy.loginButton }))
    fireEvent.click(screen.getByRole("button", { name: authCopy.closeModalLabel }))

    expect(screen.queryByText(authCopy.loginTitle)).not.toBeInTheDocument()
  })
})
