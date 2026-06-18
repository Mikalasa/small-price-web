export const pageStyles = {
  base: "bg-[#f7f8fb] text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-100",
}

export const textStyles = {
  eyebrow: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400",
  cardEyebrow: "text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400",
  heading: "text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl dark:text-slate-50",
  cardTitle: "text-lg font-bold text-slate-950 dark:text-slate-50",
  productName: "truncate text-sm font-bold text-slate-950 dark:text-slate-100",
  productMeta: "text-xs font-medium text-slate-500 dark:text-slate-400",
  productHeat: "font-semibold text-slate-500 dark:text-slate-400",
  price: "text-sm font-bold text-slate-950 dark:text-slate-50",
  priceChange: "text-xs font-bold text-green-700 dark:text-emerald-400",
  imageInitials: "text-lg font-black text-slate-300 dark:text-slate-600",
}

export const cardStyles = {
  popular: "rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none",
  productItem: "rounded-xl border border-slate-100 bg-slate-50 p-3 transition hover:border-slate-200 hover:bg-white dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700 dark:hover:bg-slate-900",
  productImage: "relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800",
}

export const watchlistStyles = {
  section: "border-t border-slate-200 bg-white/55 py-14 dark:border-slate-800 dark:bg-slate-950",
  card: "group flex min-h-32 w-full items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600 dark:hover:bg-slate-800",
  image: "flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-black text-slate-400 transition group-hover:bg-white dark:bg-slate-800 dark:text-slate-500 dark:group-hover:bg-slate-900",
  viewAllCard: "flex min-h-32 w-full flex-col items-start justify-center rounded-xl border border-dashed border-slate-300 bg-transparent p-4 text-left transition hover:border-slate-500 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 dark:border-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-900",
  modalBackdrop: "bg-slate-950/35 px-4 py-8 dark:bg-slate-950/75",
  modalPanel: "relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none",
  chart: "h-72 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/50",
  priceSummary: "rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/40",
}

export const badgeStyles = {
  muted: "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  productNote: "rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  rank: "absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-500 dark:bg-slate-700 dark:text-slate-300",
}

export const buttonStyles = {
  primary: "rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 sm:px-7 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white",
  loginText: "rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white",
  avatarLoggedIn: "bg-slate-950 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white",
  avatarLoggedOut: "bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white",
  modalPrimary: "h-11 w-full rounded-lg bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white",
  modalClose: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg leading-none text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white",
  modalGhost: "flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-200 hover:bg-slate-50 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800",
  modalDanger: "h-11 w-full rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-red-900 dark:hover:bg-red-950/40 dark:hover:text-red-300",
}

export const inputStyles = {
  searchShell: "rounded-full border border-slate-200 bg-white px-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition focus-within:border-slate-400 sm:px-6 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:focus-within:border-slate-600",
  searchInput: "min-w-0 flex-1 bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400 sm:text-lg dark:text-slate-100 dark:placeholder:text-slate-500",
  modalInput: "h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-600 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-500",
}

export const loginStyles = {
  profileShell: "rounded-full border border-white/70 bg-white/90 p-1.5 shadow-[0_12px_35px_rgba(15,23,42,0.1)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none",
  avatarButton: "h-10 w-10 rounded-full text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",
  modalBackdrop: "bg-slate-950/30 px-4 py-8 dark:bg-slate-950/70",
  modalPanel: "relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none",
  accountCard: "rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/40",
  accountAvatar: "h-12 w-12 rounded-md bg-slate-950 text-base font-bold text-white dark:bg-slate-100 dark:text-slate-950",
  error: "rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300",
  modalTitle: "mt-2 text-2xl font-bold tracking-normal text-slate-950 dark:text-slate-50",
  modalBody: "text-sm leading-6 text-slate-600 dark:text-slate-300",
  modalLabel: "text-sm font-semibold text-slate-700 dark:text-slate-200",
  demoPanel: "rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm dark:border-slate-800 dark:bg-slate-950/40",
  demoLabel: "text-xs font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500",
  testCredential: "font-medium text-slate-600 dark:text-slate-300",
  accountName: "font-bold text-slate-950 dark:text-slate-50",
  accountEmail: "text-sm text-slate-500 dark:text-slate-400",
  accountCount: "text-slate-400 dark:text-slate-500",
}

export const themeToggleStyles = {
  shell: "rounded-full border border-white/70 bg-white/90 p-1.5 shadow-[0_12px_35px_rgba(15,23,42,0.1)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none",
  button: "flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
}
