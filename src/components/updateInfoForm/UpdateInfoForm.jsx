import { useContext, useRef, useState } from "react";
import { PrimaryContext } from "../../context/Context";

const UpdateInfoForm = () => {
    const { user } = useContext(PrimaryContext);
    const [updateBtnClick, setUpdateButtonClick] = useState(false);
    const nameRef = useRef(null)
    // using useRef hook to focus on the input fields after clicking on update btn

    console.log(user)
    function updateBtnStateHandler() {
        setUpdateButtonClick(true);
        nameRef.current.focus()
    }
    function cancelBtnStateHandler() {
        setUpdateButtonClick(false);
    }

    function handleUpdateData(e) {

        e.preventDefault()
    }
    return (
        <div className="h-full flex flex-col">
            <h1 className="text-center text-3xl font-bold text-primaryText">Personal Area</h1>

            <form onSubmit={handleUpdateData} className="w-full space-y-7">

                {/* Name Field */}
                <div>
                    <label className="font-bold text-primaryText">Name</label>
                    <input ref={nameRef} type="text" name="Name" className={` ${!updateBtnClick ? "pointer-events-none" : "border-b-white"} input  validator focus:outline-none focus:ring-0    focus:border-r-0 focus:border-l-0 focus:border-b-white text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full`} required placeholder={`${!updateBtnClick ? user?.displayName : "New Full Name"}`}
                        pattern="[A-Za-z][A-Za-z0-9\- ]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" />
                </div>

                {/* email */}
                <div>
                    <label className="font-bold  text-primaryText">Email</label>
                    <input name="email" className={` ${!updateBtnClick ? "pointer-events-none" : "border-b-white"} input validator focus:outline-none  focus:border-t-0 focus:border-r-0  focus:border-b-white text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full`} type="email" required placeholder={`${!updateBtnClick ? user?.email : "New Email Address"}`} />
                </div>

                {/* Image URL */}
                <div>
                    <label className="font-bold text-primaryText">Profile Picture Link</label>
                    <input name="image" type="url" className={`${!updateBtnClick ? "pointer-events-none" : "border-b-white"} input validator focus:outline-none  focus:border-t-0 focus:border-r-0  focus:border-b-white text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full`} placeholder={`${!updateBtnClick ? user?.photoURL : "New Profile Image URL"}`}
                        pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
                        title="Must be valid URL" />
                    <label className="label text-black flex gap-2 "></label>
                </div>


                {
                    updateBtnClick ?
                        <div className="space-x-2">
                            <button type="submit" className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">Submit</button>
                            <button onClick={cancelBtnStateHandler} className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">Cancel</button>
                        </div>
                        : < button onClick={updateBtnStateHandler} className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">Update Data</button>

                }


            </form >

        </div >

    );
};

export default UpdateInfoForm;