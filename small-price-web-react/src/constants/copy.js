export const searchCopy = {
  eyebrow: "Small Price",
  heading: "Search smarter before you buy.",
  label: "Search products",
  placeholder: "Search products, brands, or model names",
  submit: "Search",
}

export const authCopy = {
  profileEyebrow: "Profile",
  loginEyebrow: "Account access",
  profileTitle: "Your account",
  loginTitle: "Log in to Small Price",
  loginButton: "Log in",
  logoutButton: "Log out",
  openProfileLabel: "Open profile",
  closeBackdropLabel: "Close login modal backdrop",
  closeModalLabel: "Close login modal",
  loginFormLabel: "Login form",
  description: "Save searches, track better prices, and keep your favorite products in one place.",
  emailLabel: "Email",
  emailPlaceholder: "you@example.com",
  passwordLabel: "Password",
  passwordPlaceholder: "Enter your password",
  loginError: "Email or password is incorrect.",
  demoAccount: "Demo account",
  savedSearches: "Saved searches",
  priceAlerts: "Price alerts",
  accountSettings: "Account settings",
}

export const popularCopy = {
  weekly: {
    eyebrow: "Weekly",
    title: "Top searches",
    period: "7 days",
  },
  monthly: {
    eyebrow: "Monthly",
    title: "Most watched",
    period: "30 days",
  },
  quarterly: {
    eyebrow: "Quarterly",
    title: "Big movers",
    period: "90 days",
  },
}

export const watchlistCopy = {
  eyebrow: "Your watchlist",
  title: "Products you follow",
  description: "Open a product to see how its price has moved over the last six months.",
  itemCount: (count) => `${count} saved`,
  currentPrice: "Current price",
  previousPrice: "Previously",
  chartEyebrow: "Six-month history",
  chartTitle: "Price movement",
  chartDescription: "Monthly lowest listed price",
  closeModalLabel: "Close price history",
  closeBackdropLabel: "Close price history backdrop",
  openProductLabel: (name) => `View price history for ${name}`,
  viewAllTitle: "View all saved products",
  viewAllDescription: (remaining) => `${remaining} more products in your watchlist`,
  viewAllAction: "View watchlist",
}

export const themeCopy = {
  switchToLight: "Switch to light mode",
  switchToDark: "Switch to dark mode",
}

export const footerCopy = {
  brand: "Small Price",
  description: "Track products, compare price movement, and make more confident buying decisions.",
  independent: "An independent price-tracking product built in Aotearoa New Zealand.",
  navigationTitle: "Explore",
  navigationLabel: "Footer navigation",
  backToTopLabel: "Small Price, back to top",
  navigation: [
    { label: "Search", href: "#search" },
    { label: "Popular products", href: "#popular-products" },
    { label: "Your watchlist", href: "#watchlist" },
    { label: "Back to top", href: "#top" },
  ],
  copyright: (year) => `© ${year} Small Price. All rights reserved.`,
  region: "Serving Australia and New Zealand",
  disclaimer: "Prices and availability can change without notice. Always confirm the final price and product details with the retailer before purchasing.",
}
