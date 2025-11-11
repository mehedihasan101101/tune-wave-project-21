
import { Outlet, useLoaderData, useLocation, useNavigate, useParams } from 'react-router';
import SongPlayCard from '../../components/songPlayCard/SongPlayCard';
import UseSongById from '../../utilities/findSongById';
import { useEffect, useState } from 'react';
import getYoutubeSongIdFromLink from '../../utilities/getYoutubeSongIdFromLink';



const Browse = () => {

    const [currentCategory, setCurrentCategory] = useState("")
    const { state } = useLocation()
    const { songId } = useParams();
    const allSongs = useLoaderData();
    const nevigate = useNavigate()
    // useEffect without dependencies — keeps the Current category fixed while navigating between songs.

    useEffect(() => {
        setCurrentCategory(state)
    }, []);

    useEffect(() => {
        if (!songId) {
            const firstSongUrl = allSongs[0].youtubeLink;
            const firstSongId = getYoutubeSongIdFromLink(firstSongUrl);

            nevigate(firstSongId, { replace: true });
        }
    }, [])



    console.log(songId);


    console.log(allSongs)
    const currentSong = UseSongById(allSongs) //this custom hook find the current played song 



    return (
        <>
            <div className='container  m-auto px-3 py-5'>
                <h2 className="text-xl font-bold text-primaryText">{currentCategory}</h2>
            </div>
            <div className='container grid-cols-12 m-auto px-3 lg:grid gap-10 '>
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
                <div className='col-span-6 grid  lg:px-5 px-1 lg:pt-0 md:pt-5 pt-5'>
                    {allSongs.map((eachTrendingSong, index) => <SongPlayCard index={index} eachTrendingSong={eachTrendingSong} ></SongPlayCard>)}
                </div>
            </div>
        </>



    );
};

export default Browse;