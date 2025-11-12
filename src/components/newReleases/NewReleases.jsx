
import CardNewReleases from "./../songPlayCardNewReleases/CardNewReleases"
import { EmblaCarousel } from "../carousel/EmblaCarousel";

const Trending15 = ({ allNewReleases }) => {

    // Route path used for the SongPlay card component. 
    // Purpose: allows reusing the same card across different music albums or categories.

    const routeLink = "new-releases";

 

    return (
        <div className="space-y-3 py-3">
            <h2 className="text-xl pl-3 font-bold text-primaryText">New Releases</h2>
            {/* trending songs cards */}
            <div className="py-3">
                <EmblaCarousel>

                    {allNewReleases.map((eachTrendingSong) => <CardNewReleases key={eachTrendingSong.id} routeLink={routeLink} eachTrendingSong={eachTrendingSong} ></CardNewReleases>)}

                </EmblaCarousel>

            </div>




        </div>
    );
};

export default Trending15;