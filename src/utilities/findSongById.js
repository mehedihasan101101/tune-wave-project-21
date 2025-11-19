// This custom Hook retrieves a specific song by its ID from a given songs array.
// The songs array is passed as an argument from where the function is called.

import { useParams } from "react-router";
import getYoutubeSongIdFromLink from "./getYoutubeSongIdFromLink";

export default function UseSongById(songs) {


    const params = useParams();
    const { songId } = params;


    for (const song of songs) {
        const songUrl = song.youtubeLink;
        const currentSongId = getYoutubeSongIdFromLink(songUrl)


        if (currentSongId == songId) {
            return song;
        }
    }
}