import { useState } from "react"
import { authCopy } from "../constants/copy.js"
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
        aria-label={authCopy.closeBackdropLabel}
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
                {isLoggedIn ? authCopy.profileEyebrow : authCopy.loginEyebrow}
              </p>
              <h2
                className={loginStyles.modalTitle}
                id="login-modal-title"
              >
                {isLoggedIn ? authCopy.profileTitle : authCopy.loginTitle}
              </h2>
            </div>

            <button
              className={buttonStyles.modalClose}
              type="button"
              aria-label={authCopy.closeModalLabel}
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
        {authCopy.description}
      </p>

      <form
        className="space-y-4"
        action="#"
        aria-label={authCopy.loginFormLabel}
        onSubmit={handleSubmit}
      >
        <div>
          <label className={`mb-2 block ${loginStyles.modalLabel}`} htmlFor="email">
            {authCopy.emailLabel}
          </label>
          <input
            className={inputStyles.modalInput}
            id="email"
            name="email"
            placeholder={authCopy.emailPlaceholder}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label className={`mb-2 block ${loginStyles.modalLabel}`} htmlFor="password">
            {authCopy.passwordLabel}
          </label>
          <input
            className={inputStyles.modalInput}
            id="password"
            name="password"
            placeholder={authCopy.passwordPlaceholder}
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
          {authCopy.loginButton}
        </button>
      </form>

      <div className="mt-5 flex items-center justify-between text-sm">
        <div className={`w-full ${loginStyles.demoPanel}`}>
          <p className={loginStyles.demoLabel}>{authCopy.demoAccount}</p>
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
          {authCopy.savedSearches}
          <span className={loginStyles.accountCount}>12</span>
        </button>
        <button className={buttonStyles.modalGhost} type="button">
          {authCopy.priceAlerts}
          <span className={loginStyles.accountCount}>5</span>
        </button>
        <button className={buttonStyles.modalGhost} type="button">
          {authCopy.accountSettings}
          <span className={loginStyles.accountCount}>→</span>
        </button>
      </div>

      <button
        className={`mt-6 ${buttonStyles.modalDanger}`}
        type="button"
        onClick={onLogout}
      >
        {authCopy.logoutButton}
      </button>
    </div>
  )
}

export default LoginModal
