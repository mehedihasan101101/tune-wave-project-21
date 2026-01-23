import { useContext, useState } from "react";
import { PrimaryContext } from "../../context/Context";
import { EmailAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router";
import SimpleLoading from "../simpleLoading/SimpleLoading";


const ResetPassForm = () => {
    const navigate = useNavigate()
    const { user, reAuthenticateUser, resetPassWord, simpleLoading, setSimpleLoading } = useContext(PrimaryContext)
    // react controlled form states
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [currentPass, setCurrentPass] = useState("");
    // state to handle cancel and back button
    const [resetSuccess, setResetSuccess] = useState(false);
    // notifications states
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccesssMsg] = useState("");

    function handleResetPassword(e) {

        e.preventDefault();
        setSimpleLoading(true);
        setSuccesssMsg("");
        setErrorMsg("");
        // this variable get userEmail and pass to reverify user to authorize to change password
        const credential = EmailAuthProvider.credential(user.email, currentPass)
        if (newPass === confirmPass) {
            reAuthenticateUser(user, credential)
                .then(() => {
                    resetPassWord(newPass).then(() => {
                        setSuccesssMsg("Your password has been updated successfully.");
                        setResetSuccess(true);
                        setSimpleLoading(false);
                        setNewPass("");
                        setConfirmPass("");
                        setCurrentPass("")
                    })
                }).catch(() => {
                    setCurrentPass("");
                    setErrorMsg("Incorrect password. Please verify and re-enter your password.");
                    setSimpleLoading(false);
                })
        }
        else {
            setSimpleLoading(false);
            setErrorMsg("Passwords do not match.")
        }

    }
    return (
        <div>
            <form className="space-y-5" onSubmit={handleResetPassword} >

                < label className="font-bold text-primaryText">New Password <span className="text-red-500">*</span></label>
                <input onChange={(e) => setNewPass(e.target.value)} name="password" value={newPass} type="password" className={`input ${newPass.length > 0 ? "validator" : ""}  focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full`} required placeholder="Password" minLength="8" />
                < label className="font-bold text-primaryText">Confirm Password <span className="text-red-500">*</span></label>
                <input onChange={(e) => setConfirmPass(e.target.value)} name="password" value={confirmPass} type="password" className={`input ${confirmPass.length > 0 ? "validator" : ""} focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full`} required placeholder="Password" minLength="8" />



                < label className="font-bold text-primaryText">Re-type Current Password <span className="text-red-500">*</span></label>
                <input onChange={(e) => setCurrentPass(e.target.value)} name="password" value={currentPass} type="password" className={`input ${currentPass.length > 0 ? "validator" : ""} focus:outline-none focus:ring-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-gray-600 text-white h-12 border shadow-none text-[17px]  border-b-gray-600 bg-transparent w-full`} required placeholder="Password" minLength="8" />

                {
                    errorMsg && <p className="text-red-500">{errorMsg}</p>

                }
                {
                    successMsg && <p className="text-green-500">{successMsg}</p>
                }
                <div className="flex gap-2">
                    < button type="submit" className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">Change Password {simpleLoading && <SimpleLoading></SimpleLoading>}</button>
                    < button onClick={() => navigate(-1)} className=" btn bg-primaryText border-0 shadow-none hover:shadow-[-2px_-1px_28px_4px_rgba(38,_252,_234,_0.4)] rounded text-black">{resetSuccess ? "Back" : "Cancel"}</button>
                </div>

            </form>
        </div>
    );
};

export default ResetPassForm;