
import ImgHero from "../../assets/ImgHero.jpg"

const HeroSection = () => {
    return (
        <div className="flex lg:gap-6 gap-2 lg:flex-row flex-col items-center space-y-3">
            <div className="lg:py-10 px-0  lg:w-2/5">
                <img className="lg:w-[599px]  rounded-2xl" src={ImgHero} alt="" srcset="" />
            </div>
            <div className="lg:w-3/5 lg:space-y-5 space-y-3">
                <h1 className=" font-bold lg:text-5xl md:text-4xl text-3xl">
                    <span>
                        Join TuneWave.
                    </span>
                    <br></br>
                    <span className="text-primaryText">
                        Where Music Never Ends.
                    </span>
                </h1>
                <p className="text-SecondaryText">TuneWave is your ultimate music destination. Discover, and enjoy endless tracks from every genre. Whether you’re chasing the latest hits or timeless classics, TuneWave keeps the music going — anytime, anywhere. Join now and let every beat move you.</p>
                <button className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">Listen Now</button>
            </div>
        </div>
    );
};

export default HeroSection;