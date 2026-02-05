import { Link, NavLink, } from "react-router";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaStream } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbUserBolt } from "react-icons/tb";
import { PrimaryContext } from "../../context/Context";
import userAvatar from "./../../assets/user.png"




const NavBar = () => {

    // closing mobile nav after clicking or touching outside the div
    const mobileMenuRef = useRef(null)
    // State to handle mobile menu open/close
    const [open, setOpen] = useState(false);
    useEffect(() => {
        function handleClickOutSideMenu(event) {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target))
                setOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutSideMenu);
        document.addEventListener("touchstart", handleClickOutSideMenu);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSideMenu);
            document.removeEventListener("touchstart", handleClickOutSideMenu);
        };
    }, [])

    const { user, SignOut, setSimpleLoading, footerAnchorRef,setSaveSong } = useContext(PrimaryContext)

    function handleSignOut() {
        SignOut()
            .then(() => {
                setSimpleLoading(false);
                setSaveSong([])
            })
            .catch( ()=> {
                setSimpleLoading(false)

            })
    }
    // Navigation fields for the navbar links
    const navFields = [
        { id: 1, path: "home", name: "Home" },
        { id: 2, path: "#aboutUsSection", name: "About Us" },
        { id: 3, path: "Dashboard", name: "Dashboard" },
    ]
    // ref to scroll to about section

    if (open) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }

    // Scrolls to the About Us section from the primary navigation menu
    function scrollToAboutUs() {
        footerAnchorRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        // Main navigation bar
        <nav className={`lg:py-3 py-2  px-3   flex flex-col items-center bg-navBar`}>

            <div className="container  flex justify-between items-center">
                {/* Main Icon */}
                {/* Mobile Menu  Icon */}
                <div className="lg:hidden">
                    {
                        <FaStream onClick={() => setOpen(!open)} className="  text-xl text-white "></FaStream>
                    }
                </div>
                <Link to={'/'}>
                    <div className="flex items-center">
                        <h1 className="text-white text-xl font-bold">Tune<span className="text-primaryText">Wave</span></h1>
                        <AiOutlineThunderbolt className="text-2xl text-primaryText"></AiOutlineThunderbolt>
                    </div>
                </Link>


                {/* Navigation Links */}
                <div ref={mobileMenuRef} className={` ${open ? "left-0" : "left-[-500px]"} duration-700  lg:static lg:block  lg:w-auto lg:h-auto md:w-[30%] w-[45%] top-0 h-screen z-40 bg-navBar lg:shadow-none shadow-xl lg:bg-transparent   absolute `}>
                    {/*Closing icon of mobile navbar */}
                    <IoClose onClick={() => setOpen(!open)} className="text-3xl font-normal absolute top-8 left-1 lg:hidden text-white"></IoClose>
                    <ul className="lg:flex relative   gap-7 lg:mt-0 mt-20 lg:bg-transparent text-[#6b6b6f]">

                        {navFields.map((field) => field.id == 2 ? <button onClick={scrollToAboutUs} className="rounded  px-6 py-2  block  hover:[text-shadow:0_0_8px_#26fcea,0_0_16px_#26fcea,0_0_24px_#26fcea] transition text-white">About Us</button> : < NavLink onClick={() => setOpen(false)} key={field.id} to={field.path} className={({ isActive }) => `rounded  px-6 py-2  block ${isActive ? "text-primaryText" :
                            " hover:[text-shadow:0_0_8px_#26fcea,0_0_16px_#26fcea,0_0_24px_#26fcea] transition text-white"}`}>{field.name}</NavLink>)}

                    </ul>
                </div>


                {/* user button */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="">
                        {
                            user ?
                                <img referrerPolicy="no-referrer" className="w-10 h-10 rounded-full" src={user?.photoURL ? user.photoURL : userAvatar} alt="user" />
                                :
                                <div className="border border-primaryText text-primaryText px-1 py-1 rounded hover:text-white hover:border-white"><TbUserBolt className=""></TbUserBolt> </div>
                        }
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content   bg-mainBg rounded-box z-1 mt-2 -ml-44 mr-3 w-52 p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        {
                            user && <li className="hover:text-primaryText">
                                <Link to={"/Dashboard"} className="justify-between">
                                    Dashboard
                                    <span className="badge bg-primaryText border-0">New</span>
                                </Link>
                            </li>
                        }

                        {
                            !user && <li className="hover:text-primaryText"><Link to={"signUp"}>Sign Up</Link></li>

                        }
                        {
                            !user && <li className="hover:text-primaryText"><Link to={"signIn"}>Sign In</Link></li>

                        }
                        {
                            user && <li className="hover:text-primaryText"><button onClick={handleSignOut} >Log Out</button></li>

                        }


                    </ul>
                </div>

            </div >

        </nav >
    );
};

export default NavBar;