import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

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

    const value = {
        loading, setLoading,
        createNewUser,
        updateUserInfo,
        setUser,user,
        signInUser,
        SignOut,
        recoverUserAcc,
        simpleLoading, setSimpleLoading,
        verifyUserEmail,
        saveSong, setSaveSong
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