import { FaRegHeart } from "react-icons/fa6";


const Trending15Card = ({ eachTrendingSong, index }) => {

    const { title, artist, duration, coverImage } = eachTrendingSong
    const songIndex = index + 1;
    return (
        <div className='flex justify-between items-center '>

            <div className='flex gap-3 items-center '>
                <div className='flex w-20'>
                    <h1 className='text-5xl font-extrabold'>{`${songIndex < 10 ? 0 : ""}${songIndex}`}</h1>
                </div>

                <img className='w-11 h-12 rounded' src={coverImage} alt="" />

                <div>
                    <h4 className="font-bold text-[16px]">{title}</h4>
                    <h4 className="text-[13px]">{artist}</h4>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <p className=''>{duration}</p>
                <FaRegHeart></FaRegHeart>

            </div>

        </div>
    );
};

export default Trending15Card;