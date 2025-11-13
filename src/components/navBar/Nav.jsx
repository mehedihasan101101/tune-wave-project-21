import { Link, NavLink, } from "react-router";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaStream } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiUser } from "react-icons/ci";





const NavBar = () => {
    // State to handle mobile menu open/close
    const [open, setOpen] = useState(false);



    // Navigation fields for the navbar links
    const navFields = [
        { id: 1, path: "home", name: "Home" },
        { id: 2, path: "about", name: "About Us" },
        { id: 3, path: "Dashboard", name: "Dashboard" },
    ]

    if (open) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
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
                <div className={` ${open ? "left-0" : "left-[-500px]"} duration-700  lg:static lg:block  lg:w-auto lg:h-auto md:w-[30%] w-[45%] top-0 h-screen z-40 bg-navBar lg:shadow-none shadow-xl lg:bg-transparent   absolute `}>
                    {/*Closing icon of mobile navbar */}
                    <IoClose onClick={() => setOpen(!open)} className="text-3xl font-normal absolute top-8 left-1 lg:hidden text-white"></IoClose>
                    <ul className="lg:flex relative   gap-7 lg:mt-0 mt-20 lg:bg-transparent text-[#6b6b6f]">

                        {navFields.map((field) => <NavLink key={field.id} to={field.path} className={({ isActive }) => `rounded  px-6 py-2  block ${isActive ? "text-primaryText" :
                            " hover:[text-shadow:0_0_8px_#26fcea,_0_0_16px_#26fcea,_0_0_24px_#26fcea] transition text-white"}`}>{field.name}</NavLink>)}
                    </ul>
                </div>


                {/* user button */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="">
                        <div className="border border-white px-1 py-1 rounded hover:text-primaryText hover:border-primaryText"><CiUser className=" text-xl "></CiUser> </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content   bg-mainBg rounded-box z-1 mt-2 -ml-44 mr-3 w-52 p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <li className="hover:text-primaryText">
                            <a className="justify-between">
                                Dashboard
                                <span className="badge bg-primaryText border-0">New</span>
                            </a>
                        </li>
                        <li className="hover:text-primaryText"><Link to={"signUp"}>Sign Up</Link></li>
                        <li className="hover:text-primaryText"><Link>Sign In</Link></li>

                    </ul>
                </div>

            </div >

        </nav >
    );
};

export default NavBar;