

export default async function ({ params }) {

    const songsApiPath = "/songs.json"
    const { category, singer } = params;

    console.log(category, singer)

    try {

        const response = await fetch(songsApiPath);
        const allSongs = await response.json();
        const { songs } = allSongs;


        if (category && category == "trending-top-15") {
            const trendingMusics = songs.filter(eachSong => eachSong.isTrending);
            return trendingMusics;
        }
        else if (category && category == "new-releases") {
            const newReleases = songs.filter(eachSong => eachSong.isNewRelease);
            return newReleases;
        }
        else if (category && category == "featured-artist") {
            const thisArtistMusics = songs.filter(eachSong => eachSong.artist.split(" ").join("") == singer);
            return thisArtistMusics
        }
        else if (category && category == "top-genre") {
            const thisArtistMusics = songs.filter(eachSong => eachSong.genre.split(" ").join("") == singer);
            return thisArtistMusics
        }
        else {
            return allSongs
        }
    }
    catch (error) {
        console.error("Failed to fetch news:", error);
        return [];
    }
}
