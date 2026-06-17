import { themeToggleStyles } from "../theme/styles.js"

function ThemeToggle({ isDark, onToggle }) {
  return (
    <div className={themeToggleStyles.shell}>
      <button
        className={themeToggleStyles.button}
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={onToggle}
      >
        {isDark ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.95-6.95 1.42-1.42M3.63 20.37l1.42-1.42m0-13.9L3.63 3.63m16.74 16.74-1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 15.5A8.5 8.5 0 0 1 8.5 4 7 7 0 1 0 20 15.5Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export default ThemeToggle
