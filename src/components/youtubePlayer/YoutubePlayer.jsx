import { useOutletContext } from "react-router";
import YouTube from "react-youtube";

const YoutubePlayer = () => {


    const songId = useOutletContext();


    const options = {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 0, // 1 = auto play, 0 = manual
            controls: 1, // show video controls
            rel: 0,      // disable related videos
        }
    };
    return (
       
        <YouTube className="" videoId={songId} opts={options}></YouTube>

    );
};

export default YoutubePlayer;