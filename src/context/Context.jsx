import { createUserWithEmailAndPassword, onAuthStateChanged, reauthenticateWithCredential, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { useRef } from "react";

const PrimaryContext = createContext(null);

const Context = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [simpleLoading, setSimpleLoading] = useState(true)
    const [saveSong, setSaveSong] = useState([])



    //user Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {

                setUser(currentUser)
                setLoading(false)
                setSimpleLoading(false)
            }
            else {
                setLoading(false)
                setSimpleLoading(false)
                setUser(null)

            }


            return () => {
                unsubscribe()
            }
        })
    }, [user])
    // SignUp
    function createNewUser(email, password) {
        setSimpleLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update userInfo
    function updateUserInfo(displayName, photoURL) {
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })
    }
    // Sing In
    function signInUser(email, password) {
        setSimpleLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Sing Out
    function SignOut() {
        setSimpleLoading(true)
        return signOut(auth);
    }
    //Recover PassWord 
    function recoverUserAcc(email) {
        setSimpleLoading(true)
        return sendPasswordResetEmail(auth, email);
    }

    //verify userAccount
    function verifyUserEmail() {
        return sendEmailVerification(auth.currentUser)
    }

    //reauthenticate user
    function reAuthenticateUser(user, credential) {
        setSimpleLoading(true)
        return reauthenticateWithCredential(user, credential);

    }
    //update user email
    function updateUserEmail(newEmail) {
        return updateEmail(user, newEmail)
    }
    //Reset Password
    function resetPassWord(newPass) {
        return updatePassword(user, newPass)
    }
    //Ref to hold footer to link with the Anchor button(About US) in the primary menu 
    const footerAnchorRef = useRef();

    const value = {
        loading, setLoading,
        createNewUser,
        updateUserInfo,
        setUser, user,
        signInUser,
        SignOut,
        recoverUserAcc,
        simpleLoading, setSimpleLoading,
        verifyUserEmail,
        saveSong, setSaveSong,
        reAuthenticateUser,
        updateUserEmail,
        resetPassWord,
        footerAnchorRef

    }
    return (
        <>
            <PrimaryContext.Provider value={value}>
                {children}
            </PrimaryContext.Provider>
        </>
    );
};

export { Context, PrimaryContext };