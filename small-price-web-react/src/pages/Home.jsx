import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import PopularProductsList from "../components/PopularProductsList.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import DailyDeals from "../features/deals/components/DailyDeals.jsx";
import WatchlistSection from "../features/watchlist/components/WatchlistSection.jsx";
import { popularCopy } from "../constants/copy.js";
import {
    monthlyPopularProducts,
    quarterlyPopularProducts,
    weeklyPopularProducts,
} from "../data/products.js";
import { useAuth } from "../features/auth/useAuth.js";
import { pageStyles } from "../theme/styles.js";

function Home() {
    const [isDark, setIsDark] = useState(false)
    const auth = useAuth()

    return(
        <div className={`relative min-h-screen ${pageStyles.base} ${isDark ? "dark" : ""}`} id="top">
            <Header
                auth={auth}
                isDark={isDark}
                onThemeToggle={() => setIsDark((current) => !current)}
            />
            <SearchBar />
            <DailyDeals />
            <section className="mx-auto w-full max-w-6xl px-5 pb-16" id="popular-products">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
                        {popularCopy.sectionTitle}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {popularCopy.sectionDescription}
                    </p>
                </div>
                <div className="grid gap-5 lg:grid-cols-3">
                    <PopularProductsList
                        copy={popularCopy.weekly}
                        products={weeklyPopularProducts}
                    />
                    <PopularProductsList
                        copy={popularCopy.monthly}
                        products={monthlyPopularProducts}
                    />
                    <PopularProductsList
                        copy={popularCopy.quarterly}
                        products={quarterlyPopularProducts}
                    />
                </div>
            </section>
            <WatchlistSection auth={auth} />
            <Footer showWatchlist={auth.isLoggedIn} />
        </div>
    )
}

export default Home
