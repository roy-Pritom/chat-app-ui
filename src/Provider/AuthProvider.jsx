import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const auth = getAuth(app);

export const authContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
            setLoading(false);

        })
        return () => {
            return unsubscribe()
        }
    }, [])
    // signUp
    const cerateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }

    // googleLogin
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // logOut
    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        cerateUser,
        login,
        loginWithGoogle,
        logOut,
        user,
        loading

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;