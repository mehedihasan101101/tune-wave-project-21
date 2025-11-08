
import { Outlet, useLoaderData, useLocation, useParams } from 'react-router';
import SongPlayCard from '../../components/songPlayCard/SongPlayCard';
import UseSongById from '../../utilities/findSongById';



const Browse = () => {



    const { songId} = useParams();

    const { state } = useLocation()


    const allSongs = useLoaderData();

    const currentSong = UseSongById(allSongs) //this custom hook find the current played song 

    const { coverImage, title, artist, album, genre, duration, releaseYear } = currentSong;

    return (
        <>
            <div className='container  m-auto px-3 py-5'>
                <h2 className="text-xl font-bold text-primaryText">{state}</h2>
            </div>
            <div className='container grid-cols-12 m-auto px-3 grid gap-10 '>
                <div className='col-span-6'>
                    <Outlet context={songId}></Outlet>

                    <div className='grid grid-cols-7 items-center gap-5 mt-5  p-2 rounded  '>
                        <div className='h-full col-span-2'>
                            <img className='rounded ' src={coverImage} alt="" />
                        </div>
                        <div className=' col-span-5 gap-15 grid-cols-9 space-y-2'>
                            <div className='flex gap-15'>
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
                <div className='col-span-6 grid overflow-y-scroll h-screen px-5'>
                    {allSongs.map((eachTrendingSong, index) => <SongPlayCard index={index} eachTrendingSong={eachTrendingSong} ></SongPlayCard>)}
                </div>
            </div>
        </>



    );
};

export default Browse;