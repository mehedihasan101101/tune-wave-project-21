import Trending15Card from "./Trending15Card";


const Trending15 = ({ trending15 }) => {

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-primaryText">Trending Top {trending15.length}</h2>
            <div className="grid grid-cols-3 gap-5">
                {trending15.map((eachTrendingSong, index) => <Trending15Card index={index} eachTrendingSong={eachTrendingSong}></Trending15Card>)}
            </div>

        </div>
    );
};

export default Trending15;