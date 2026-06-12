import { useState } from "react"
import LoginModal from "./LoginModal.jsx"

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

function LoginProfile() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)
  const isLoggedIn = Boolean(user)
  const initials = user ? getInitials(user.name) : ""

  return (
    <>
      <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/85 p-1.5 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <button
          className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          {isLoggedIn ? user.name : "Log in"}
        </button>

        <button
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow-[0_10px_24px_rgba(15,23,42,0.18)] transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${
            isLoggedIn
              ? "bg-slate-950 text-white hover:bg-teal-700"
              : "bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-700"
          }`}
          type="button"
          aria-label="Open profile"
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
        user={user}
        onLogin={(nextUser) => setUser(nextUser)}
        onLogout={() => setUser(null)}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default LoginProfile
