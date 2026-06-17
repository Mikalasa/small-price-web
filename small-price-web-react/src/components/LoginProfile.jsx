import { useState } from "react"
import { authCopy } from "../constants/copy.js"
import { getInitials } from "../features/auth/authUtils.js"
import { useAuth } from "../features/auth/useAuth.js"
import { buttonStyles, loginStyles } from "../theme/styles.js"
import LoginModal from "./LoginModal.jsx"

function LoginProfile() {
  const [isOpen, setIsOpen] = useState(false)
  const auth = useAuth()
  const { user, isLoggedIn } = auth
  const initials = user ? getInitials(user.name) : ""

  return (
    <>
      <div className={`flex items-center gap-2 ${loginStyles.profileShell}`}>
        <button
          className={buttonStyles.loginText}
          type="button"
          onClick={() => setIsOpen(true)}
        >
          {isLoggedIn ? user.name : authCopy.loginButton}
        </button>

        <button
          className={`flex items-center justify-center ${loginStyles.avatarButton} ${
            isLoggedIn
              ? buttonStyles.avatarLoggedIn
              : buttonStyles.avatarLoggedOut
          }`}
          type="button"
          aria-label={authCopy.openProfileLabel}
          onClick={() => setIsOpen(true)}
        >
          {isLoggedIn ? (
            initials
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8a7 7 0 0 0-14 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      <LoginModal
        isOpen={isOpen}
        auth={auth}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default LoginProfile
