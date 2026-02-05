import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink, useParams } from "react-router";
import { PiGooglePlayLogo } from "react-icons/pi";
import getYoutubeSongIdFromLink from "../../utilities/getYoutubeSongIdFromLink";
import { PrimaryContext } from "../../context/Context";
import { FaHeart } from "react-icons/fa";
import ReactToast from "../react-toast/ReactToast";
import ReactToastSuccess from "../react-toast/ReactToastSuccess";


const Trending15Card = ({ eachTrendingSong, index, routeLink }) => {

    // getting favorite song from primary context
    const { saveSong, setSaveSong, user } = useContext(PrimaryContext)

    const songSaveStatus = saveSong.some(eachSaveSong => eachSaveSong.id == eachTrendingSong.id); //check status if the song is already on the favorite list

    // this function add song to the favorite list
    function handleSaveSong() {
        if (!user) {
            ReactToast()
            return
        }
        if (!songSaveStatus) {
            setSaveSong([...saveSong, eachTrendingSong]);
            ReactToastSuccess()
            return
        }
        if (songSaveStatus) {
            const removeFromSaveList = saveSong.filter(each => each.id !== eachTrendingSong.id);
            setSaveSong(removeFromSaveList)
        }
    }


    const { category, singer } = useParams();

    // Route path used for the SongPlay card component. 
    // Purpose: allows reusing the same card across different music albums or categories.
    const songId = getYoutubeSongIdFromLink(eachTrendingSong.youtubeLink);




    const { title, artist, duration, coverImage } = eachTrendingSong;
    // Since array indexes start at 0, adding 1 ensures the count begins from 1.
    const songIndex = index + 1;

    //state to handle hover effect of each music card
    const [MouseEnter, setMouseEnter] = useState(false)

    // Sets the state to true when the mouse enters a music card.

    function MouseEnterHover() {
        setMouseEnter(true)

    }

    // Sets the state to false when the mouse enters a music card.
    function MouseLeaveHover() {
        setMouseEnter(false)
    }

    return (

        <div className="flex items-center gap-2 justify-between border-b border-gray-600/40">
            <NavLink to={`/home/${category == "featured-artist" || category == "top-genre" ? "album/" : ""}${category ? category : routeLink}${category == "featured-artist" || category == "top-genre" ? `/${singer}` : ""}/${songId}`} onMouseEnter={MouseEnterHover} onMouseLeave={MouseLeaveHover} className={`py-3 w-full`}>

                {({ isActive }) => (

                    <div className=' flex items-center justify-between'>
                        <div className={`flex ${category ? "lg:gap-0" : "lg:gap-2"} md:gap-5 gap-7 items-center `}>
                            <div className='flex w-10 lg:w-20'>
                                <h1 className={`${category ? "lg:text-2xl" : "lg:text-5xl"} text-3xl font-extrabold ${isActive && "text-primaryText "}  ${MouseEnter ? "text-primaryText transition duration-300 font-bold" : ""}`}>{`${songIndex < 10 ? 0 : ""}${songIndex}`}</h1>
                            </div>
                            <div className="flex gap-6 items-center justify-center ">
                                <div className="relative">
                                    <img className='lg:w-14 lg:h-13  w-13 h-12  rounded ' src={coverImage} alt="" />

                                    <PiGooglePlayLogo className={`absolute z-10 transition-all duration-300 text-2xl ${MouseEnter ? " top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100" : "top-5 left-1/2 opacity-0  -translate-y-full -translate-x-1/2 "}`}></PiGooglePlayLogo>
                                    <div className={`bg-black/50 w-full h-full absolute top-0 rounded opacity-0 transition-all duration-300 ${MouseEnter && "opacity-100"}`}>
                                    </div>
                                </div>

                                <div>
                                    <h4 className={`font-bold lg:text-[16px] text-[15px] ${isActive && "text-primaryText "}   ${MouseEnter ? "text-primaryText transition duration-500 " : ""} `}>{title}</h4>
                                    <h4 className="lg:text-[13px] text-[12px]">{artist}</h4>
                                </div>
                            </div>
                        </div>


                        <p className=''>{duration}</p>


                    </div>
                )}

            </NavLink >
            <button className="cursor-pointer inline" onClick={handleSaveSong}>
                {
                    songSaveStatus ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>
                }

            </button>
        </div>





    );
};

export default Trending15Card;