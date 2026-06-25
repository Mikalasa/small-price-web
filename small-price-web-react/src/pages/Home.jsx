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
import { pageStyles } from "../theme/styles.js";

function Home() {
    const [isDark, setIsDark] = useState(false)

    return(
        <div className={`relative min-h-screen ${pageStyles.base} ${isDark ? "dark" : ""}`} id="top">
            <Header
                isDark={isDark}
                onThemeToggle={() => setIsDark((current) => !current)}
            />
            <SearchBar />
            <section
                className="mx-auto grid w-full max-w-6xl gap-5 px-5 pb-16 lg:grid-cols-3"
                id="popular-products"
            >
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
            <DailyDeals />
            <WatchlistSection />
            <Footer />
        </div>
    )
}

export default Home
