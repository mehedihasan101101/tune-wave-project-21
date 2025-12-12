import { useContext } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link, Navigate } from "react-router";
import { PrimaryContext } from "../../context/Context";
import { useState } from "react";
import SimpleLoading from "../../components/simpleLoading/SimpleLoading";

const SignIn = () => {
    const {user, simpleLoading, setSimpleLoading, signInUser } = useContext(PrimaryContext)
    const [errorMessage, setErrorMessage] = useState("");
    const [successMsg, setSuccessMsg] = useState("")

    function handleSignIn(e) {
        e.preventDefault()
        setErrorMessage("");
        setSuccessMsg("");

        const Email = e.target.email.value;
        const pass = e.target.password.value;
        signInUser(Email, pass)
            .then(() => {
                setSuccessMsg("Sign In Successful!");
                setSimpleLoading(false)
            })
            .catch((err) => {
                setErrorMessage(err.message);
                setSimpleLoading(false)
            })
    }
    // prohibit access to this page when user is signed in
    if (user) {
        return (
            <>
                <Navigate to={'/'}></Navigate>
            </>
        )
    }
    return (
        <div className='container  m-auto flex items-center justify-center min-h-[70vh] mt-10'>
            <div className="lg:w-[35%] w-[90%] flex flex-col md:px-13 md:py-10  p-5 rounded items-center justify-center border lg:border-gray-600/15 border-gray-600/50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                <div className="flex flex-col items-center  w-full">
                    <Link to={'/'}>
                        <div className="flex items-center">
                            <h1 className="text-white lg:text-3xl text-2xl font-bold">Tune<span className="text-primaryText">Wave</span></h1>
                            <AiOutlineThunderbolt className="text-2xl  text-primaryText"></AiOutlineThunderbolt>
                        </div>
                    </Link>
                    <h1 className="lg:text-3xl  text-2xl font-extrabold text-primaryText">Sign in your Account</h1>

                </div>
                <form onSubmit={handleSignIn} action="" className=" w-full space-y-3 mt-5">

                    <div className="space-y-5">

                        {/* email */}
                        <label className="font-bold  text-primaryText">Email</label>
                        <input name="email" className="input validator focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full" type="email" required placeholder="mail@site.com" />
                        {/* password */}
                        <label className="font-bold text-primaryText">Password</label>
                        <input name="password" type="password" className="input validator focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full" required placeholder="Password" minLength="8" />




                        <div className="space-y-2">
                            <p className="text-gray-500">Don't have an account!<Link state={location.state} to={"/signUp"} className="text-primaryText ml-1">Sign Up</Link></p>

                            <Link to={"/recovery"} className="text-primaryText">Forget Password</Link>
                        </div>


                        {/* success & error Message */}
                        <p className="text-green-500">{successMsg}</p>
                        <p className="text-red-500">{errorMessage}</p>
                        {/* submit */}
                        <button className="btn bg-primaryText shadow-none text-black border-none w-full ">
                            <input className=" " type="submit" value="Sign In" />
                            {simpleLoading && <SimpleLoading></SimpleLoading>}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;