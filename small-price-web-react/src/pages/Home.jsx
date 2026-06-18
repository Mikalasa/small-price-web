import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import LoginProfile from "../components/LoginProfile.jsx";
import PopularProductsList from "../components/PopularProductsList.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import WatchlistSection from "../features/watchlist/components/WatchlistSection.jsx";
import { popularCopy } from "../constants/copy.js";
import {
    monthlyPopularProducts,
    quarterlyPopularProducts,
    weeklyPopularProducts,
} from "../data/products.js";
import { pageStyles } from "../theme/styles.js";

function Home() {
    const [isDark, setIsDark] = useState(false)

    return(
        <div className={`relative min-h-screen ${pageStyles.base} ${isDark ? "dark" : ""}`}>
            <div className="absolute left-5 top-5 z-10 sm:left-8 sm:top-8">
                <ThemeToggle
                    isDark={isDark}
                    onToggle={() => setIsDark((current) => !current)}
                />
            </div>
            <div className="absolute right-5 top-5 z-10 sm:right-8 sm:top-8">
                <LoginProfile />
            </div>
            <SearchBar />
            <section className="mx-auto grid w-full max-w-6xl gap-5 px-5 pb-16 lg:grid-cols-3">
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
            </section>
            <WatchlistSection />
        </div>
    )
}

export default Home
