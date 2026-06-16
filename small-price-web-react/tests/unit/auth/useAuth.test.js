import { act, renderHook } from "@testing-library/react"
import { fakeUser } from "../../../src/data/users.js"
import { useAuth } from "../../../src/features/auth/useAuth.js"

describe("useAuth", () => {
  test("starts as logged out", () => {
    const { result } = renderHook(() => useAuth())

    expect(result.current.user).toBeNull()
    expect(result.current.isLoggedIn).toBe(false)
  })

  test("logs in with the fake user's email and password", () => {
    const { result } = renderHook(() => useAuth())

    act(() => {
      result.current.login(fakeUser.email, fakeUser.password)
    })

    expect(result.current.isLoggedIn).toBe(true)
    expect(result.current.user).toEqual({
      name: fakeUser.name,
      email: fakeUser.email,
    })
  })

  test("returns an error when login fails", () => {
    const { result } = renderHook(() => useAuth())
    let loginResult

    act(() => {
      loginResult = result.current.login(fakeUser.email, "wrong-password")
    })

    expect(loginResult.ok).toBe(false)
    expect(loginResult.error).toBe("Email or password is incorrect.")
    expect(result.current.user).toBeNull()
  })

  test("logs out after a successful login", () => {
    const { result } = renderHook(() => useAuth())

    act(() => {
      result.current.login(fakeUser.email, fakeUser.password)
    })

    act(() => {
      result.current.logout()
    })

    expect(result.current.user).toBeNull()
    expect(result.current.isLoggedIn).toBe(false)
  })
})
