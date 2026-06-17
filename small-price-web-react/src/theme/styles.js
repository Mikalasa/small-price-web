export const pageStyles = {
  base: "bg-[#f7f8fb] text-slate-950",
}

export const textStyles = {
  eyebrow: "text-sm font-semibold uppercase tracking-[0.16em] text-slate-500",
  cardEyebrow: "text-xs font-bold uppercase tracking-[0.16em] text-slate-500",
  heading: "text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl",
  cardTitle: "text-lg font-bold text-slate-950",
  productName: "truncate text-sm font-bold text-slate-950",
  productMeta: "text-xs font-medium text-slate-500",
  price: "text-sm font-bold text-slate-950",
  priceChange: "text-xs font-bold text-green-700",
}

export const cardStyles = {
  popular: "rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)]",
  productItem: "rounded-xl border border-slate-100 bg-slate-50 p-3 transition hover:border-slate-200 hover:bg-white",
  productImage: "relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white",
}

export const badgeStyles = {
  muted: "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600",
  productNote: "rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-600",
  rank: "absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-500",
}

export const buttonStyles = {
  primary: "rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 sm:px-7",
  loginText: "rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",
  avatarLoggedIn: "bg-slate-950 text-white hover:bg-slate-800",
  avatarLoggedOut: "bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-700",
  modalPrimary: "h-11 w-full rounded-lg bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",
  modalClose: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xl leading-none text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",
  modalGhost: "flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-200 hover:bg-slate-50",
  modalDanger: "h-11 w-full rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400",
}

export const inputStyles = {
  searchShell: "rounded-full border border-slate-200 bg-white px-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition focus-within:border-slate-400 sm:px-6",
  searchInput: "min-w-0 flex-1 bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400 sm:text-lg",
  modalInput: "h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-600",
}

export const loginStyles = {
  profileShell: "rounded-full border border-white/70 bg-white/90 p-1.5 shadow-[0_12px_35px_rgba(15,23,42,0.1)] backdrop-blur-md",
  avatarButton: "h-10 w-10 rounded-full text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",
  modalBackdrop: "bg-slate-950/30 px-4 py-8",
  modalPanel: "relative w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white",
  modalAccent: "absolute inset-x-0 top-0 h-1 bg-slate-950",
  accountCard: "rounded-lg border border-slate-200 bg-slate-50 p-4",
  accountAvatar: "h-12 w-12 rounded-md bg-slate-950 text-base font-bold text-white",
  error: "rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600",
}
