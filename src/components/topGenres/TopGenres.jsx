import { useEffect, useState } from "react";
import CardGenre from "../cardTopGenres/CardGenre";

const TopGenres = () => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        const url = "/genres.json";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setGenres(data))
            .catch((err) => console.error("Error loading data:", err));
    }, [])

    const routeLink = "top-genre"

    return (
        <>
            <div className="space-y-5">
                <div className="pt-5">
                    <h2 className="text-xl font-bold text-primaryText">Top Genres</h2>
                </div>
                <div className="grid  grid-cols-12 gap-2">
                    {
                        genres.map((eachGenre, index) => <CardGenre eachGenre={eachGenre} index={index} routeLink={routeLink}></CardGenre>)
                    }
                </div>
            </div>


        </>

    );
};

export default TopGenres;