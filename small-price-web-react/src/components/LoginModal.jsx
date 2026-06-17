import { useState } from "react"
import { getTestCredentials } from "../features/auth/authService.js"
import { getInitials } from "../features/auth/authUtils.js"
import { buttonStyles, inputStyles, loginStyles, textStyles } from "../theme/styles.js"

function LoginModal({ isOpen, auth, onClose }) {
  if (!isOpen) {
    return null
  }

  const { user } = auth
  const isLoggedIn = Boolean(user)

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${loginStyles.modalBackdrop}`}>
      <button
        className="absolute inset-0 cursor-default"
        type="button"
        aria-label="Close login modal backdrop"
        onClick={onClose}
      />

      <section
        className={loginStyles.modalPanel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
      >
        <div className="p-5 sm:p-6">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className={textStyles.cardEyebrow}>
                {isLoggedIn ? "Profile" : "Account access"}
              </p>
              <h2
                className={loginStyles.modalTitle}
                id="login-modal-title"
              >
                {isLoggedIn ? "Your account" : "Log in to Small Price"}
              </h2>
            </div>

            <button
              className={buttonStyles.modalClose}
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
      <p className={`mb-6 ${loginStyles.modalBody}`}>
        Save searches, track better prices, and keep your favorite products in one place.
      </p>

      <form
        className="space-y-4"
        action="#"
        aria-label="Login form"
        onSubmit={handleSubmit}
      >
        <div>
          <label className={`mb-2 block ${loginStyles.modalLabel}`} htmlFor="email">
            Email
          </label>
          <input
            className={inputStyles.modalInput}
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label className={`mb-2 block ${loginStyles.modalLabel}`} htmlFor="password">
            Password
          </label>
          <input
            className={inputStyles.modalInput}
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {error ? (
          <p className={loginStyles.error}>
            {error}
          </p>
        ) : null}

        <button
          className={`mt-2 ${buttonStyles.modalPrimary}`}
          type="submit"
        >
          Log in
        </button>
      </form>

      <div className="mt-5 flex items-center justify-between text-sm">
        <div className={`w-full ${loginStyles.demoPanel}`}>
          <p className={loginStyles.demoLabel}>Demo account</p>
          <div className="mt-2 flex flex-wrap justify-between gap-2">
            <span className={loginStyles.testCredential}>{testCredentials.email}</span>
            <span className={loginStyles.testCredential}>{testCredentials.password}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function LoggedInContent({ user, onLogout }) {
  return (
    <div>
      <div className={`mb-6 flex items-center gap-4 ${loginStyles.accountCard}`}>
        <div className={`flex items-center justify-center ${loginStyles.accountAvatar}`}>
          {getInitials(user.name)}
        </div>
        <div>
          <p className={loginStyles.accountName}>{user.name}</p>
          <p className={loginStyles.accountEmail}>{user.email}</p>
        </div>
      </div>

      <div className="space-y-2">
        <button className={buttonStyles.modalGhost} type="button">
          Saved searches
          <span className={loginStyles.accountCount}>12</span>
        </button>
        <button className={buttonStyles.modalGhost} type="button">
          Price alerts
          <span className={loginStyles.accountCount}>5</span>
        </button>
        <button className={buttonStyles.modalGhost} type="button">
          Account settings
          <span className={loginStyles.accountCount}>→</span>
        </button>
      </div>

      <button
        className={`mt-6 ${buttonStyles.modalDanger}`}
        type="button"
        onClick={onLogout}
      >
        Log out
      </button>
    </div>
  )
}

export default LoginModal
