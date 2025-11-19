import { useContext } from "react";
import { PrimaryContext } from "../../context/Context";
import SongPlayCard from "./../songPlayCard/SongPlayCard"

const SaveList = () => {
    const { saveSong } = useContext(PrimaryContext);
    const routeLink = "all-songs"
    return (
        <>
            {saveSong.map((each, index) => <SongPlayCard eachTrendingSong={each} routeLink={routeLink} index={index}></SongPlayCard>)}
        </>
    );
};

export default SaveList;