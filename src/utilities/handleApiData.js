

export default async function ({ params }) {

    const songsApiPath = "/songs.json"
    const { category } = params;

    try {

        const response = await fetch(songsApiPath);
        const allSongs = await response.json();
        const { songs } = allSongs;


        if (category && category == "trending") {
            const trendingMusics = songs.filter(eachSong => eachSong.isTrending);
            return trendingMusics;
        }
        else if (category && category == "newReleases") {
            const newReleases = songs.filter(eachSong => eachSong.isTrending);
            return newReleases;
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
