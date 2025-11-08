
import { Outlet, useLoaderData, useParams } from 'react-router';
import SongPlayCard from '../../components/songPlayCard/SongPlayCard';
import UseSongById from '../../utilities/findSongById';



const Browse = () => {

    const { songId } = useParams();

    const allSongs = useLoaderData();

    const currentSong = UseSongById(allSongs) //this custom hook find the current played song 

    const { coverImage, title, artist, album, genre, duration, releaseYear } = currentSong;
    console.log(currentSong)

    return (
        <div className='container grid-cols-12 m-auto px-3 grid gap-10'>
            <div className='col-span-6'>
                <Outlet context={songId}></Outlet>

                <div className='flex items-center gap-5 mt-5 bg-blak/10 p-2 rounded  '>
                    <div className='w-1/4'>
                        <img className='rounded h-full' src={coverImage} alt="" />
                    </div>
                    <div className=' gap-15 space-y-2'>
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
            <div className='col-span-6 grid overflow-y-scroll h-[100vh] px-5'>
                {allSongs.map((eachTrendingSong, index) => <SongPlayCard index={index} eachTrendingSong={eachTrendingSong} ></SongPlayCard>)}
            </div>
        </div>
    );
};

export default Browse;