import { footerCopy } from "../constants/copy.js"
import { footerStyles } from "../theme/styles.js"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={footerStyles.shell}>
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(16rem,1fr)] md:gap-16">
          <div className="max-w-lg">
            <a className="inline-flex items-center gap-3" href="#top" aria-label={footerCopy.backToTopLabel}>
              <span className={footerStyles.mark} aria-hidden="true">SP</span>
              <span className={footerStyles.brand}>{footerCopy.brand}</span>
            </a>
            <p className={footerStyles.description}>{footerCopy.description}</p>
            <p className={footerStyles.independent}>{footerCopy.independent}</p>
          </div>

          <nav aria-label={footerCopy.navigationLabel}>
            <p className={footerStyles.heading}>{footerCopy.navigationTitle}</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {footerCopy.navigation.map((item) => (
                <li key={item.href}>
                  <a className={footerStyles.link} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={footerStyles.bottomBar}>
          <p>{footerCopy.copyright(currentYear)}</p>
          <p>{footerCopy.region}</p>
        </div>

        <p className={footerStyles.disclaimer}>{footerCopy.disclaimer}</p>
      </div>
    </footer>
  )
}

export default Footer
