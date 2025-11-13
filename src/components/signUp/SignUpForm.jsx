import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router";


const SignUpForm = () => {
    return (
        <div className='container  m-auto flex items-center justify-center h-[70vh] mt-10'>
            <div className="lg:w-[40%] w-[90%] flex flex-col md:px-13 md:py-10  p-5 rounded items-center justify-center border lg:border-gray-600/15 border-gray-600/50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                <div className="flex flex-col items-center  w-full">
                    <Link to={'/'}>
                        <div className="flex items-center">
                            <h1 className="text-white lg:text-3xl text-2xl font-bold">Tune<span className="text-primaryText">Wave</span></h1>
                            <AiOutlineThunderbolt className="text-2xl  text-primaryText"></AiOutlineThunderbolt>
                        </div>
                    </Link>
                    <h1 className="lg:text-3xl  text-2xl font-extrabold text-primaryText">Create your Account</h1>

                </div>
                <form action="" className=" w-full space-y-3 mt-5">

                    <div className="space-y-5">
                        {/* Name Field */}
                        <label className="font-bold text-primaryText">Your Name</label>
                        <input type="text" name="Name" className="input validator focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full" required placeholder="Enter Your Name"
                            pattern="[A-Za-z][A-Za-z0-9\- ]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />


                        {/* email */}
                        <label className="font-bold  text-primaryText">Email</label>
                        <input name="email" className="input validator focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full" type="email" required placeholder="mail@site.com" />
                        {/* password */}
                        <label className="font-bold text-primaryText">Password</label>
                        <input name="password" type="password" className="input validator focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full" required placeholder="Password" minlength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />


                        {/* Image URL */}
                        <label className="font-bold text-primaryText">Profile Picture Link <sup className="label text-[12px] text-gray-500">(Optional)</sup></label>
                        <p className="text-[12px] text-gray-500">Add your image URL, or use the example below<br></br>https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg</p>
                        <input name="image" type="url" className="input validator focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full" placeholder="https://"
                            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
                            title="Must be valid URL" />
                        <label className="label text-black flex gap-2 ">

                            {/* term and condition */}
                            <input type="checkbox" className="checkbox validator checked:bg-primaryText border-primaryText" required title="Required" />
                            <span className="mt-1 text-gray-500">I Agree to the Terms & Conditions</span>
                        </label>
                        <p className="text-gray-500">Already have an Account!<Link state={location.state} to={"/login"} className="text-primaryText ml-1">Login</Link></p>
                        {/* submit */}
                        <input className="btn bg-primaryText text-black border-none w-full " type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;