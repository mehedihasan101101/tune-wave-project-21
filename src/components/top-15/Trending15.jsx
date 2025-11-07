import Trending15Card from "./Trending15Card";


const Trending15 = ({ trending15 }) => {

    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold text-primaryText">Trending Top {trending15.length}</h2>
            {/* trending songs cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-x-11 gap-y-4">
                {trending15.map((eachTrendingSong, index) => <Trending15Card index={index} eachTrendingSong={eachTrendingSong}></Trending15Card>)}
            </div>

        </div>
    );
};

export default Trending15;