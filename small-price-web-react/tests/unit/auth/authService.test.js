import {
  getTestCredentials,
  loginWithEmailAndPassword,
} from "../../../src/features/auth/authService.js"
import { fakeUser } from "../../../src/features/auth/fakeUser.js"

describe("authService", () => {
  test("logs in when email and password are correct", () => {
    const user = loginWithEmailAndPassword(fakeUser.email, fakeUser.password)

    expect(user).toEqual({
      name: fakeUser.name,
      email: fakeUser.email,
    })
  })

  test("returns null when password is wrong", () => {
    const user = loginWithEmailAndPassword(fakeUser.email, "wrong-password")

    expect(user).toBeNull()
  })

  test("returns the fake test credentials", () => {
    const credentials = getTestCredentials()

    expect(credentials.email).toBe(fakeUser.email)
    expect(credentials.password).toBe(fakeUser.password)
  })
})
