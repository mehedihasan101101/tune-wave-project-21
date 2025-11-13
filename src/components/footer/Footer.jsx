
import googlePlayLogo from '../../assets/googleplaylogo.png'
import appleStoreLogo from '../../assets/applelogo.png'
import { FiPhoneCall } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";



const Footer = () => {
    return (
        <>
            <div className="bg-[url(/img/footerImg.png)] min-h-[30vh] relative bg-cover bg-center bg-no-repeat  container m-auto ">

                {/* overlay */}
                <div className="h-full w-full  bg-linear-to-r from-mainBg via-black/75 to-mainBg absolute top-0">

                </div>

                <div className="relative h-full w-full grid grid-cols-6 justify-between lg:pt-15 pt-10 gap-8 px-3 pb-10">
                    {/* Download Our App */}
                    <div className="lg:col-span-2 col-span-6 space-y-4">
                        <h3 className="text-[22px] font-bold text-primaryText">Download Our App</h3>


                        <p>Download our app now and enjoy unlimited music anytime, anywhere! Stream your favorite songs and explore new artists all in one place. Don’t wait — start listening to the music you love today!</p>
                        <div className='flex gap-3'>
                            <button className='flex items-center gap-2 bg-white text-black px-2 py-1 rounded cursor-pointer '>
                                <img className='w-7' src={googlePlayLogo} alt="" srcset="" />
                                <div>
                                    <p className='text-[13px]'>Download Now</p>
                                    <p className='text-[13px]'>Google Play</p>
                                </div>

                            </button>
                            <button className='flex items-center gap-2 bg-white text-black px-2 py-1 rounded cursor-pointer '>
                                <img className='w-9' src={appleStoreLogo} alt="" srcset="" />
                                <div>
                                    <p className='text-[13px]'>Download Now</p>
                                    <p className='text-[13px]'>Apple Store</p>
                                </div>

                            </button>
                        </div>

                    </div>
                    {/* Subscribe */}
                    <div className="lg:col-span-2 col-span-6 space-y-4">
                        <h3 className="text-[22px] font-bold text-primaryText">Subscribe</h3>
                        <div className='flex flex-col gap-2'>
                            <input type="text  " placeholder="Your Name" className="input text-black font-bold" />
                            <input type="text" placeholder="Your Email" className="input text-black font-bold" />
                        </div>

                        <button className="btn block text-black bg-primaryText border-0 shadow-none">Subscribe</button>
                    </div>
                    {/* Contact Us */}
                    <div className="lg:col-span-2 col-span-6 space-y-3">
                        <h3 className="text-[22px] font-bold text-primaryText">Contact Us</h3>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-4'>
                                <button className='bg-primaryText p-3 text-xl rounded font-extrabold text-black'><FiPhoneCall></FiPhoneCall></button>
                                <div>
                                    <p className=''>Call Us:</p>
                                    <p className=''>+351 232-232 , +351 432-432 </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button className='bg-primaryText p-3 text-xl rounded font-extrabold text-black'><SiMinutemailer></SiMinutemailer></button>
                                <div>
                                    <p className=''>Email Us:</p>
                                    <p className=''>TuneWave101@hotmail.com </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button className='bg-primaryText p-3  text-xl rounded font-extrabold text-black'><IoLocationSharp></IoLocationSharp></button>
                                <div>
                                    <p className=''>Location:</p>
                                    <address className=''>Estrada  Penedo Rentrao,39-D</address>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;