import { useContext } from "react";
import { PrimaryContext } from "../../context/Context";
import userAvatar from "./../../assets/user.png"

const Dashboard = () => {
    const { user } = useContext(PrimaryContext);
    console.log(user.emailVerified)
    return (
        <div className="container flex flex-col m-auto px-3 min-h-[60vh] mt-10">

            <div className="flex-1 flex lg:flex-row flex-col gap-2">
                <div className=" lg:w-[40%] w-full flex flex-col items-center  justify-center space-y-2 border lg:border-gray-600/15 border-gray-600/50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">

                    <img referrerPolicy="no-referrer" className="h-25  w-25  border-3 border-primaryText rounded-full overflow-hidden flex" src={user?.photoURL ? user.photoURL : userAvatar} alt="" />
                    <p className="text-primaryText">{user?.displayName}</p>
                    <p className="text-primaryText">Email: <span className="text-white">{user?.email}</span></p>
                    <p className="text-primaryText">Account Status:<span className={`${user?.emailVerified ? "text-green-500" : " text-red-500"}`}> {user?.emailVerified ? "verified" : "Not Verified"}</span></p>
                </div>
                <div className="  w-full lg:flex-auto flex-1 lg:h-auto h-full border lg:border-gray-600/20 border-gray-600/50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">

                </div>
            </div>

        </div>
    );
};

export default Dashboard;