import { createContext, useState } from "react";

const PrimaryContext = createContext(null);

const Context = ({ children }) => {
    const [currentCategory, setCurrentCategoryName] = useState("");

    const albumFirstSongId = "";
    const value = {
        setCurrentCategoryName,
        currentCategory,
        albumFirstSongId
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