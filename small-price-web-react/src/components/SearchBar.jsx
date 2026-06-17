import { buttonStyles, inputStyles, pageStyles, textStyles } from "../theme/styles.js";

function SearchBar(){
    return (
        <main className={pageStyles.base}>
            <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-8 pt-32 sm:pt-36">
                <div className="mb-7 text-center">
                    <p className={`mb-3 ${textStyles.eyebrow}`}>
                        Small Price
                    </p>
                    <h1 className={`mx-auto max-w-3xl ${textStyles.heading}`}>
                        Search smarter before you buy.
                    </h1>
                </div>

                <form className="w-full max-w-3xl" action="#" role="search">
                    <div className={`flex min-h-16 items-center gap-3 ${inputStyles.searchShell}`}>
                        <svg
                            className="h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500"
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
                            className={inputStyles.searchInput}
                            type="search"
                            name="q"
                            placeholder="Search products, brands, or model names"
                        />
                        <button
                            className={`shrink-0 ${buttonStyles.primary}`}
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
