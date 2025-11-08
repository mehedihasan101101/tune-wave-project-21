import { useLoaderData } from "react-router";
import HeroSection from "../../components/herosection/HeroSection";
import Trending15 from "../../components/top-15/Trending15";


const Home = () => {
    const { songs } = useLoaderData();


    const trending15 = songs.filter(eachTrendingSong => eachTrendingSong.isTrending);

  
    return (
        <>
            <header className="container m-auto lg:py-0 md:py-10 py-5 px-3">
                <HeroSection></HeroSection>
            </header>
            <section className="container m-auto px-3">
                <Trending15 trending15={trending15}></Trending15>
            </section>

        </>


    );
};

export default Home;