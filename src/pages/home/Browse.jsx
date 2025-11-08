
import { Outlet, useLoaderData, useParams } from 'react-router';
import SongPlayCard from '../../components/songPlayCard/SongPlayCard';



const Browse = () => {

    const { songId } = useParams();
    console.log(songId)

    const trendingSongs = useLoaderData();
    console.log(trendingSongs)


    return (
        <div className='container grid-cols-12 m-auto px-3 grid gap-10'>
            <div className='col-span-6'>
                <Outlet context={songId}></Outlet>
            </div>
            <div className='col-span-6 grid'>
                {trendingSongs.map((eachTrendingSong, index) => <SongPlayCard index={index} eachTrendingSong={eachTrendingSong} ></SongPlayCard>)}
            </div>
        </div>
    );
};

export default Browse;