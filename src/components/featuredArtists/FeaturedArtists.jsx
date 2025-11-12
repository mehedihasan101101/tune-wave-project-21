import { useEffect, useState } from "react";
import FeaturedArtCard from "../cardFeaturedArtists/FeaturedArtCard";
import { EmblaCarousel } from "../carousel/EmblaCarousel";

const FeaturedArtists = () => {

    const [artists, setArtist] = useState([]);
    useEffect(() => {
        const url = "/feturedArtists.json";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setArtist(data))
            .catch((err) => console.error("Error loading data:", err));
    }, [])

    const routeLink = "featured-artists";
    return (
        <>
            <div className="space-y-5 pt-5">
                <h2 className="text-xl pl-3 font-bold text-primaryText">Featured Artists</h2>

                <div className="">
                    <EmblaCarousel>
                        {
                            artists.map((eachArtist) => <FeaturedArtCard eachArtist={eachArtist} routeLink={routeLink}></FeaturedArtCard>)
                        }

                    </EmblaCarousel>


                </div>

            </div>


        </>

    );
};

export default FeaturedArtists;