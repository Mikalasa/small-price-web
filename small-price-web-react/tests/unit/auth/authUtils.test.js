import { getInitials } from "../../../src/features/auth/authUtils.js"

describe("authUtils", () => {
  test("creates initials from first name and last name", () => {
    const initials = getInitials("Gezhe Wang")

    expect(initials).toBe("GW")
  })

  test("uses only the first two words when the name has more words", () => {
    const initials = getInitials("Ada Lovelace Byron")

    expect(initials).toBe("AL")
  })

  test("works when the name has extra spaces", () => {
    const initials = getInitials("  Grace   Hopper  ")

    expect(initials).toBe("GH")
  })
})
