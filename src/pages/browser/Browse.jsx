
import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router';
import SongPlayCard from '../../components/songPlayCard/SongPlayCard';
import UseSongById from '../../utilities/findSongById';
import { useEffect } from 'react';
import getYoutubeSongIdFromLink from '../../utilities/getYoutubeSongIdFromLink';



const Browse = () => {



    const { songId, category } = useParams();
    const allSongs = useLoaderData();
    const nevigate = useNavigate()
    // useEffect without dependencies — keeps the Current category fixed while navigating between songs.


    //// Redirects the user to the first song if they try to access a specific artist's songs when current song param is undefined/false; 
    useEffect(() => {
        if (!songId) {
            const firstSongUrl = allSongs[0].youtubeLink;
            const firstSongId = getYoutubeSongIdFromLink(firstSongUrl);

            nevigate(firstSongId, { replace: true });
        }
    }, [])



    const currentSong = UseSongById(allSongs) //this custom hook find the current played song 



    return (
        <div className='container m-auto px-3 lg:pb-20'>

            <div className='container m-auto px-3 py-5'>
                {/* Here category param transformed into title */}
                <h2 className="text-xl font-bold text-primaryText">{category.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")}</h2>

            </div>
            <div className=' grid-cols-12  lg:grid gap-10 '>
                <div className='col-span-6 '>
                    <Outlet context={songId}></Outlet>
                    {currentSong && (<div className='md:grid flex  grid-cols-7 items-center gap-5 mt-5  md:p-2 rounded  '>

                        <img className='rounded  md:h-full md:w-auto w-1/2  col-span-2' src={currentSong.coverImage} alt="" />

                        <div className=' col-span-5 md:w-auto w-1/2  gap-15 grid-cols-9 space-y-2'>
                            <div className='md:flex gap-15'>
                                <div>
                                    <h5 className='text-x'><span className='text-primaryText'>Title:</span> {currentSong.title || ""}</h5>
                                    <h5 className='text-x'><span className='text-primaryText'>Artist:</span> {currentSong.artist || ""}</h5>
                                    <h5 className='text-x'><span className='text-primaryText'>Duration:</span> {currentSong.duration || ""}</h5>
                                    <h5 className='text-x'><span className='text-primaryText'>Genre:</span> {currentSong.genre || ""}</h5>
                                </div>

                                <div>

                                    <h5 className='text-x'><span className='text-primaryText'>Album:</span> {currentSong.album || ""}</h5>
                                    <h5 className='text-x'><span className='text-primaryText'>Release Year:</span> {currentSong.releaseYear || ""}</h5>
                                </div>
                            </div>
                        </div>

                    </div>)}

                </div>
                <div className={`col-span-6 grid ${allSongs.length > 9 && "overflow-y-scroll h-[700px] lg:px-0 px-3"}   lg:px-5 px-1 lg:pt-0 md:pt-5 pt-5`}>
                    {allSongs.map((eachTrendingSong, index) => <SongPlayCard index={index} eachTrendingSong={eachTrendingSong} ></SongPlayCard>)}
                </div>
            </div>
        </div>



    );
};

export default Browse;