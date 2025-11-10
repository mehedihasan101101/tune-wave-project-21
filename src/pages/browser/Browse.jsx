
import { Outlet, useLoaderData, useLocation, useParams } from 'react-router';
import SongPlayCard from '../../components/songPlayCard/SongPlayCard';
import UseSongById from '../../utilities/findSongById';
import { useEffect, useState } from 'react';



const Browse = () => {
    const [currentCategory, setCurrentCategory] = useState("")
    const { state } = useLocation()


    // useEffect without dependencies — keeps the Current category fixed while navigating between songs.

    useEffect(() => {
        setCurrentCategory(state)
    }, [])

    const { songId } = useParams();



    console.log(songId)
    const allSongs = useLoaderData();

    console.log(allSongs)
    const currentSong = UseSongById(allSongs) //this custom hook find the current played song 

    console.log(currentSong)
    const { coverImage, title, artist, album, genre, duration, releaseYear } = currentSong;

    return (
        <>
            <div className='container  m-auto px-3 py-5'>
                <h2 className="text-xl font-bold text-primaryText">{currentCategory}</h2>
            </div>
            <div className='container grid-cols-12 m-auto px-3 lg:grid gap-10 '>
                <div className='col-span-6 '>
                    <Outlet context={songId}></Outlet>

                    <div className='md:grid flex  grid-cols-7 items-center gap-5 mt-5  md:p-2 rounded  '>

                        <img className='rounded  md:h-full md:w-auto w-1/2  col-span-2' src={coverImage} alt="" />

                        <div className=' col-span-5 md:w-auto w-1/2  gap-15 grid-cols-9 space-y-2'>
                            <div className='md:flex gap-15'>
                                <div>
                                    <h5 className='text-x'><span className='text-primaryText'>Title:</span> {title}</h5>
                                    <h5 className='text-x'><span className='text-primaryText'>Artist:</span> {artist}</h5>
                                    <h5 className='text-x'><span className='text-primaryText'>Duration:</span> {duration}</h5>
                                    <h5 className='text-x'><span className='text-primaryText'>Genre:</span> {genre}</h5>
                                </div>

                                <div>

                                    <h5 className='text-x'><span className='text-primaryText'>Album:</span> {album}</h5>
                                    <h5 className='text-x'><span className='text-primaryText'>Release Year:</span> {releaseYear}</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-span-6 grid lg:overflow-y-scroll lg:h-screen lg:px-5 px-1 lg:pt-0 md:pt-5 pt-5'>
                    {allSongs.map((eachTrendingSong, index) => <SongPlayCard index={index} eachTrendingSong={eachTrendingSong} ></SongPlayCard>)}
                </div>
            </div>
        </>



    );
};

export default Browse;