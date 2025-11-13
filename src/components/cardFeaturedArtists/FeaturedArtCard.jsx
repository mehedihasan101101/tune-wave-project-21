import { Link } from "react-router";


const FeaturedArtCard = ({ eachArtist, routeLink }) => {
    const { coverImage, name } = eachArtist
    return (
        <Link to={`album/${routeLink}/${name.split(" ").join("")}`} className={`shrink-0 grow-0 lg:basis-[20%] md:px-3 pr-1  md:basis-[33.33%] basis-[50%] md:basis min-w-0 space-y-3 lg:hover:text-primaryText active:text-primaryText transition lg:duration-300`}>
            <div className="lg:h-50 md:h-38 h-35  relative">
                <img className="h-full w-full rounded-xl" src={coverImage} alt="Artist" />
                <h5 className="md:text-[16px]  absolute bottom-2 left-2 ">{name}</h5>
            </div>

        </Link>
    );
};

export default FeaturedArtCard;