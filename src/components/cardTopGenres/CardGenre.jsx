import { Link } from "react-router";


const CardGenre = ({ eachGenre, index }) => {
    return (
        <>
            <Link className={`${index == 0 ? "lg:col-span-4  lg:row-span-6 md:col-span-4   col-span-8  " :
                index == 1 ? "lg:col-span-2 lg:row-span-3 md:col-span-8                    col-span-4  "
                    : index == 2 ? "lg:col-span-3 lg:row-span-3 md:col-span-8              col-span-4"
                        : index == 3 ? "lg:col-span-3 lg:row-span-6 md:col-span-4          col-span-8 "
                            : index == 4 ? "lg:col-span-3 lg:row-span-3 md:col-span-6      col-span-6 "
                                : index == 5 ? "lg:col-span-2  lg:row-span-3 md:col-span-6 col-span-6 "
                                    : ""
                }  relative lg:rounded-2xl md:rounded-xl  rounded`}>

                <img className=" w-full h-full  lg:rounded-2xl md:rounded-xl rounded" src={eachGenre.coverImage} alt="" />
                {/* overlay */}
                <h6 className="absolute bottom-3  left-4">{eachGenre.genre}</h6>
                <div className="h-full lg:rounded-2xl md:rounded-xl  rounded transition-all duration-300 w-full lg:hover:opacity-0 active:opacity-0   top-0 bg-linear-to-t from-primaryText/35 to-[#ffffff]/20 absolute">

                </div>
            </Link>



        </>


    );
};

export default CardGenre;