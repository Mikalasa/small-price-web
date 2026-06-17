import { useState } from "react"
import { getTestCredentials } from "../features/auth/authService.js"
import { getInitials } from "../features/auth/authUtils.js"

function LoginModal({ isOpen, auth, onClose }) {
  if (!isOpen) {
    return null
  }

  const { user } = auth
  const isLoggedIn = Boolean(user)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 px-4 py-8">
      <button
        className="absolute inset-0 cursor-default"
        type="button"
        aria-label="Close login modal backdrop"
        onClick={onClose}
      />

      <section
        className="relative w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-slate-950" />

        <div className="p-6 sm:p-7">
          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                {isLoggedIn ? "Profile" : "Account access"}
              </p>
              <h2
                className="mt-2 text-2xl font-bold tracking-normal text-slate-950"
                id="login-modal-title"
              >
                {isLoggedIn ? "Your account" : "Log in to Small Price"}
              </h2>
            </div>

            <button
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xl leading-none text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              type="button"
              aria-label="Close login modal"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          {isLoggedIn ? (
            <LoggedInContent
              user={user}
              onLogout={() => {
                auth.logout()
                onClose()
              }}
            />
          ) : (
            <LoggedOutContent
              onLogin={(email, password) => {
                const result = auth.login(email, password)

                if (result.ok) {
                  onClose()
                }

                return result
              }}
            />
          )}
        </div>
      </section>
    </div>
  )
}

function LoggedOutContent({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const testCredentials = getTestCredentials()

  function handleSubmit(event) {
    event.preventDefault()
    const result = onLogin(email, password)

    if (result.ok) {
      setError("")
      return
    }

    setError(result.error)
  }

  return (
    <div>
      <p className="mb-6 text-sm leading-6 text-slate-600">
        Save searches, track better prices, and keep your favorite products in one place.
      </p>

      <form
        className="space-y-4"
        action="#"
        aria-label="Login form"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-600"
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="password">
            Password
          </label>
          <input
            className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-600"
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {error ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
            {error}
          </p>
        ) : null}

        <button
          className="mt-2 h-11 w-full rounded-lg bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          type="submit"
        >
          Log in
        </button>
      </form>

      <div className="mt-5 flex items-center justify-between text-sm">
        <button className="font-medium text-teal-700 hover:text-teal-800" type="button">
          Test: {testCredentials.email}
        </button>
        <button className="font-medium text-slate-500 hover:text-slate-900" type="button">
          Password: {testCredentials.password}
        </button>
      </div>
    </div>
  )
}

function LoggedInContent({ user, onLogout }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-950 text-base font-bold text-white">
          {getInitials(user.name)}
        </div>
        <div>
          <p className="font-bold text-slate-950">{user.name}</p>
          <p className="text-sm text-slate-500">{user.email}</p>
        </div>
      </div>

      <div className="space-y-2">
        <button className="flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-200 hover:bg-slate-50" type="button">
          Saved searches
          <span className="text-slate-400">12</span>
        </button>
        <button className="flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-200 hover:bg-slate-50" type="button">
          Price alerts
          <span className="text-slate-400">5</span>
        </button>
        <button className="flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-200 hover:bg-slate-50" type="button">
          Account settings
          <span className="text-slate-400">→</span>
        </button>
      </div>

      <button
        className="mt-6 h-11 w-full rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
        type="button"
        onClick={onLogout}
      >
        Log out
      </button>
    </div>
  )
}

export default LoginModal
