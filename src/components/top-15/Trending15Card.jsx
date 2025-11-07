import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router";
import { PiGooglePlayLogo } from "react-icons/pi";



const Trending15Card = ({ eachTrendingSong, index }) => {

    const { title, artist, duration, coverImage } = eachTrendingSong
    const songIndex = index + 1;

    const [MouseEnter, setMouseEnter] = useState(false)

    function MouseEnterHover() {
        setMouseEnter(true)
        console.log(MouseEnter)
    }
    function MouseLeaveHover() {
        setMouseEnter(false)
        console.log(MouseEnter)
    }


    return (
        <Link onMouseEnter={MouseEnterHover} onMouseLeave={MouseLeaveHover} className=" border-b border-gray-600/40 py-3">
            <div className='flex justify-between items-center'>
                <div className='flex lg:gap-7 md:gap-5 gap-7 items-center '>
                    <div className='flex lg:w-20'>
                        <h1 className={`lg:text-5xl text-3xl font-extrabold  ${MouseEnter ? "text-primaryText transition duration-300 font-bold" : ""}`}>{`${songIndex < 10 ? 0 : ""}${songIndex}`}</h1>
                    </div>
                    <div className="relative">
                        <img className='lg:w-14 lg:h-13  w-13 h-12  rounded ' src={coverImage} alt="" />

                        <PiGooglePlayLogo className={`absolute z-10 transition-all duration-300 text-2xl ${MouseEnter ? " top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100" : "top-5 left-1/2 opacity-0  -translate-y-full -translate-x-1/2 "}`}></PiGooglePlayLogo>
                        <div className={`bg-black/50 w-full h-full absolute top-0 rounded opacity-0 transition-all duration-300 ${MouseEnter && "opacity-100"}`}>
                        </div>
                    </div>

                    <div>
                        <h4 className={`font-bold lg:text-[16px] text-[15px] ${MouseEnter ? "text-primaryText transition duration-500 " : ""} `}>{title}</h4>
                        <h4 className="lg:text-[13px] text-[12px]">{artist}</h4>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p className=''>{duration}</p>
                    <FaRegHeart></FaRegHeart>
                </div>
            </div>
        </Link >

    );
};

export default Trending15Card;