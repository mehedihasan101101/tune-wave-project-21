
import SongPlayCard from "./../songPlayCard/SongPlayCard"

const Trending15 = ({ trending15 }) => {


    // Route path used for the SongPlay card component. 
    // Purpose: allows reusing the same card across different music albums or categories.

    const routeLink = "trending";
    const categoryName = "Top Trending 15"



    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold text-primaryText">Trending Top {trending15.length}</h2>
            {/* trending songs cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-x-11 gap-y-4">
                {trending15.map((eachTrendingSong, index) => <SongPlayCard key={eachTrendingSong.id} index={index} routeLink={routeLink} eachTrendingSong={eachTrendingSong} categoryName={categoryName}></SongPlayCard>)}
            </div>

        </div>
    );
};

export default Trending15;