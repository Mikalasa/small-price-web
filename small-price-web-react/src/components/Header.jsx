import { headerCopy } from "../constants/copy.js"
import { headerStyles, pageStyles } from "../theme/styles.js"
import LoginProfile from "./LoginProfile.jsx"
import ThemeToggle from "./ThemeToggle.jsx"

function Header({ auth, isDark, onThemeToggle }) {
  const navigation = auth?.isLoggedIn
    ? headerCopy.navigation
    : headerCopy.navigation.filter((item) => item.href !== "#watchlist")

  return (
    <header className={pageStyles.topBar}>
      <a className={headerStyles.brandLink} href="#search">
        <span className={headerStyles.brandMark}>SP</span>
        <span className={headerStyles.brandName}>{headerCopy.brand}</span>
      </a>

      <nav className={headerStyles.nav} aria-label={headerCopy.navigationLabel}>
        {navigation.map((item) => (
          <a className={headerStyles.navLink} href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className={headerStyles.actions}>
        <ThemeToggle
          isDark={isDark}
          onToggle={onThemeToggle}
        />
        <LoginProfile auth={auth} />
      </div>
    </header>
  )
}

export default Header
