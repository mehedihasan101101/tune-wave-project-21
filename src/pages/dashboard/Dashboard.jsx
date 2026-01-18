import { useContext } from "react";
import { PrimaryContext } from "../../context/Context";
import userAvatar from "./../../assets/user.png"
import { Link, Navigate, Outlet, useLocation } from "react-router";

const Dashboard = () => {
    const { user, verifyUserEmail } = useContext(PrimaryContext);
    const { pathname } = useLocation();
    console.log(pathname)
    function verifyEmail() {
        verifyUserEmail()
            .then(() => {
                alert("Verification email has been sent to your mail! Check your inbox or spam.");
            })
            .catch(() => {
                alert("Your verification email is on the way. Look in your inbox or spam. Too many attempts—please wait before retrying.")
            })
    }
    if (!user) {
        return (
            <Navigate to={"/home"} replace={true} ></Navigate>
        )

    }
    return (
        <div className="container flex flex-col m-auto px-3 min-h-[60vh] mt-10">

            <div className="flex-1 flex lg:flex-row flex-col gap-2">
                <div className=" lg:w-[40%] w-full flex flex-col items-center lg:py-0 py-5  justify-center space-y-3 border lg:border-gray-600/15 border-gray-600/50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">

                    <img referrerPolicy="no-referrer" className="h-25  w-25  border-3 shadow-[-2px_-1px_28px_4px_rgba(38,252,234,0.4)] border-primaryText rounded-full overflow-hidden flex" src={user?.photoURL ? user.photoURL : userAvatar} alt="" />
                    <p className="text-primaryText mt-3">{user?.displayName}</p>
                    <p className="text-primaryText">Email: <span className="text-white">{user?.email}</span></p>
                    <p className="text-primaryText">Account Status:<span className={`${user?.emailVerified ? "text-green-500" : " text-red-500"}`}> {user?.emailVerified ? "Verified " : "Not Verified"}</span></p>
                    {!user?.emailVerified && <button onClick={verifyEmail} className="text-primaryText cursor-pointer">Verify your Account</button>
                    }                    <Link to={"info"}><button className="text-primaryText cursor-pointer">Personal Area</button></Link>
                </div>
                <div className={`${pathname == "/Dashboard/info" ? "" : "overflow-auto max-h-[60vh]"} w-full  h-full p-5 lg:flex-auto flex-1 lg:h-auto  border lg:border-gray-600/20 border-gray-600/50 shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;