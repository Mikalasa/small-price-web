import { useMemo, useState } from "react"
import { loginWithEmailAndPassword } from "./authService.js"

export function useAuth() {
  const [user, setUser] = useState(null)

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: Boolean(user),
      login(email, password) {
        const nextUser = loginWithEmailAndPassword(email, password)

        if (!nextUser) {
          return {
            ok: false,
            error: "Email or password is incorrect.",
          }
        }

        setUser(nextUser)

        return {
          ok: true,
          user: nextUser,
        }
      },
      logout() {
        setUser(null)
      },
    }),
    [user],
  )

  return value
}
