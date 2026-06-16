import SearchBar from "../components/SearchBar.jsx";
import LoginProfile from "../components/LoginProfile.jsx";
import MonthlyPopularProducts from "../components/MonthlyPopularProducts.jsx";
import QuarterlyPopularProducts from "../components/QuarterlyPopularProducts.jsx";
import WeeklyPopularProducts from "../components/WeeklyPopularProducts.jsx";

function Home() {
    return(
        <div className="relative min-h-screen bg-[#f7f8fb]">
            <div className="absolute right-5 top-5 z-10 sm:right-8 sm:top-8">
                <LoginProfile />
            </div>
            <SearchBar />
            <section className="mx-auto grid w-full max-w-6xl gap-5 px-5 pb-16 lg:grid-cols-3">
                <WeeklyPopularProducts />
                <MonthlyPopularProducts />
                <QuarterlyPopularProducts />
            </section>
        </div>
    )
}

export default Home
