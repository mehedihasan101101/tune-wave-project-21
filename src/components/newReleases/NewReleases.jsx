
import { useContext } from "react";
import SongPlayCard from "./../songPlayCard/SongPlayCard"
import { PrimaryContext } from "../../context/Context";

const Trending15 = ({ allNewReleases }) => {


    // Route path used for the SongPlay card component. 
    // Purpose: allows reusing the same card across different music albums or categories.

    const routeLink = "newReleases";
    const categoryName = "New Releases"

    const { setCurrentCategoryName } = useContext(PrimaryContext);

    setCurrentCategoryName(categoryName)

    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold text-primaryText">New Releases </h2>
            {/* trending songs cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-x-11 gap-y-4">
                {allNewReleases.map((eachTrendingSong, index) => <SongPlayCard key={eachTrendingSong.id} index={index} routeLink={routeLink} eachTrendingSong={eachTrendingSong} categoryName={categoryName}></SongPlayCard>)}
            </div>

        </div>
    );
};

export default Trending15;