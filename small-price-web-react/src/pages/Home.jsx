import SearchBar from "../components/SearchBar.jsx";
import LoginProfile from "../components/LoginProfile.jsx";

function Home() {
    return(
        <div className="relative min-h-screen">
            <div className="absolute right-5 top-5 z-10 sm:right-8 sm:top-8">
                <LoginProfile />
            </div>
            <SearchBar />
        </div>
    )
}

export default Home
