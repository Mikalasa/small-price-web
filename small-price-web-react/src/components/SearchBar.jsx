function SearchBar(){
    return (
        <main className="bg-[#f7f8fb] text-slate-950">
            <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-8 pt-32 sm:pt-36">
                <div className="mb-7 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Small Price
                    </p>
                    <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">
                        Search smarter before you buy.
                    </h1>
                </div>

                <form className="w-full max-w-3xl" action="#" role="search">
                    <div className="flex min-h-16 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition focus-within:border-slate-400 sm:px-6">
                        <svg
                            className="h-5 w-5 shrink-0 text-slate-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="m21 21-4.2-4.2m1.2-5.3a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        <label className="sr-only" htmlFor="product-search">
                            Search products
                        </label>
                        <input
                            id="product-search"
                            className="min-w-0 flex-1 bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400 sm:text-lg"
                            type="search"
                            name="q"
                            placeholder="Search products, brands, or model names"
                        />
                        <button
                            className="shrink-0 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 sm:px-7"
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default SearchBar;
