import { useContext, useRef, useState } from "react";
import { PrimaryContext } from "../../context/Context";
import { EmailAuthProvider } from "firebase/auth";
import SimpleLoading from "../simpleLoading/SimpleLoading";
import { Link } from "react-router";


const UpdateInfoForm = () => {


    const { user, reAuthenticateUser, updateUserInfo, simpleLoading, setSimpleLoading, } = useContext(PrimaryContext);
    const [updateBtnClick, setUpdateButtonClick] = useState(false);
    const nameRef = useRef(null)    // using useRef hook to focus on the input fields after clicking on update btn

    // state to handle value of form inputs
    const [userName, setUserName] = useState(`${user?.displayName}`);
    const [userEmail, setUserEmail] = useState(`${user?.email}`);
    const [userImgLink, setUserImgLink] = useState(`${user.photoURL}`);
    const [userPass, setUserPass] = useState("");

    // notifications states
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccesssMsg] = useState("");

    function updateBtnStateHandler() {
        setUpdateButtonClick(true);
        nameRef.current.focus()
    }
    function cancelBtnStateHandler() {
        setUserName(user?.displayName);
        setUserEmail(user?.email);
        setUserImgLink(user?.photoURL);
        setUserPass("");
        setErrorMsg("");
        setSuccesssMsg("");

        setUpdateButtonClick(false);
    }

    function handleUpdateData(e) {

        e.preventDefault()
        setErrorMsg("");
        setSuccesssMsg("");
        const credential = EmailAuthProvider.credential(user.email, userPass)
        if (user) {

            reAuthenticateUser(user, credential)
                .then(() => {

                    if (user.email == userEmail.toLocaleLowerCase() && user.photoURL === userImgLink && user.displayName === userName) {
                        setSimpleLoading(false)
                        return setErrorMsg("Oops! It looks like nothing was updated. Make a change before submitting.")
                    }
                    updateUserInfo(userName, userImgLink)
                    setSuccesssMsg("Success!")
                    setSimpleLoading(false)

                    document.getElementById('my_modal_1').showModal();


                }).catch(() => {
                    setErrorMsg("Incorrect password. Please verify and re-enter your password.")
                    setSimpleLoading(false)

                })
        } else {
            console.log("User is not logged in")
        }


    }

    return (
        <div className="h-full flex flex-col">
            <h1 className="text-center text-3xl font-bold text-primaryText">Personal Area</h1>

            <form onSubmit={handleUpdateData} className="w-full space-y-7">

                {/* Name Field */}
                <div>
                    <label className="font-bold text-primaryText">Name</label>
                    <input onChange={(e) => setUserName(e.target.value)} ref={nameRef} type="text" name="Name" value={userName} className={` ${!updateBtnClick ? "pointer-events-none text-gray-400" : "border-b-white text-white validator"} input   focus:outline-none focus:ring-0    focus:border-r-0 focus:border-t-0 focus:border-l-0 focus:border-b-white  h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full`}
                        pattern="[A-Za-z][A-Za-z0-9\- ]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" />
                </div>

                {/* email */}
                <div>
                    <label className="font-bold  text-primaryText">Email</label>
                    <input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} name="email" className={` ${!updateBtnClick ? "pointer-events-none text-gray-400" : "border-b-white validator"} input  focus:outline-none  focus:border-t-0 focus:border-r-0  focus:border-b-white  h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full`} type="email" />
                </div>

                {/* Image URL */}
                <div>
                    <label className="font-bold text-primaryText">Profile Picture Link</label>
                    <input onChange={(e) => setUserImgLink(e.target.value)} value={userImgLink} name="image" type="url" className={`${!updateBtnClick ? "pointer-events-none text-gray-400" : "border-b-white validator"} input  focus:outline-none  focus:border-t-0 focus:border-r-0  focus:border-b-white  h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full`}
                        pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
                        title="Must be valid URL" />
                    <label className="label text-black flex gap-2 "></label>
                </div>

                {
                    updateBtnClick &&
                    <>

                        <div>
                            {/* revalidate with pass */}
                            < label className="font-bold text-primaryText">Re-enter your password <span className="text-red-500">*</span></label>
                            <input onChange={(e) => setUserPass(e.target.value)} name="password" value={userPass} type="password" className="input validator focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full" required placeholder="Password" minLength="8" />
                        </div>
                        {
                            errorMsg && <p className="text-red-500">{errorMsg}</p>

                        }
                        {
                            successMsg && <p className="text-green-500">{successMsg}</p>
                        }
                    </>



                }


                {
                    updateBtnClick ?

                        <div className="space-x-2">

                            <button type="submit" className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">Submit{simpleLoading && <SimpleLoading></SimpleLoading>}</button>
                            <button onClick={cancelBtnStateHandler} className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">Cancel</button>
                        </div>
                        : < button onClick={updateBtnStateHandler} className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">Update Data</button>

                }


            </form >

            {/* Modal to notify user Data is updated from daisy Ui */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-mainBg border border-primaryText">
                    <h3 className="font-bold text-lg text-primaryText">Success !</h3>
                    <p className="py-4">Your data has been successfully updated.</p>
                    <div className="flex justify-end">
                        < button onClick={() => window.location.reload()} className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">Reload</button>

                    </div>
                </div>
            </dialog>
        </div >

    );
};

export default UpdateInfoForm;