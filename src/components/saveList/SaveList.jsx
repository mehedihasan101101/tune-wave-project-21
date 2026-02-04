import { useContext } from "react";
import { PrimaryContext } from "../../context/Context";
import SongPlayCard from "./../songPlayCard/SongPlayCard"
import { BsEmojiFrown } from "react-icons/bs";

const SaveList = () => {
    const { saveSong } = useContext(PrimaryContext);
    const routeLink = "all-songs"
    return (
        <div className="h-full">
            {saveSong.length > 0 && (< h1 className="text-primaryText">Favorites</h1>)}
            {saveSong.length > 0 ? saveSong.map((each, index) => <SongPlayCard eachTrendingSong={each} routeLink={routeLink} index={index}></SongPlayCard>) :
                <div className=" flex items-center justify-center h-full ">
                    <div className="flex items-center  justify-center gap-2 text-SecondaryText font-bold ">
                        <BsEmojiFrown className="text-2xl"></BsEmojiFrown><p className="mt-1">Empty</p>
                    </div>
                </div>
            }

        </div >
    );
};

export default SaveList;