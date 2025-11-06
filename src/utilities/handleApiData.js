

export default async function ({ params }) {
    const apiPathUrl = "/songs.json"
    try {
        const response = await fetch(apiPathUrl);
        const allSongs = await response.json()
        return allSongs;
    }
    catch (error) {
        console.error("Failed to fetch news:", error);
        return [];
    }
}
