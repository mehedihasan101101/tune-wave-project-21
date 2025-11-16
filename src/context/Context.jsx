import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

const PrimaryContext = createContext(null);

const Context = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [simpleLoading, setSimpleLoading] = useState(true)

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
    }, [])
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



    const value = {
        loading, setLoading,
        createNewUser,
        updateUserInfo,
        user,
        signInUser,
        SignOut,
        recoverUserAcc,
        simpleLoading, setSimpleLoading
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