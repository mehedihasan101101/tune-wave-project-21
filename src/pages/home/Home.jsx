import HeroSection from "../../components/herosection/HeroSection";
import Trending15 from "../../components/top-15/Trending15";


const Home = () => {
    return (
        <>
            <header className="container m-auto py-10">
                <HeroSection></HeroSection>
            </header>
            <section className="container m-auto px-3">
                <Trending15></Trending15>
            </section>

        </>


    );
};

export default Home;