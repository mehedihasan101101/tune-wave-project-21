import { createContext, useState } from "react";

const PrimaryContext = createContext(null);

const Context = ({ children }) => {
    const [currentCategory, setCurrentCategoryName] = useState("");
    const value = {
        setCurrentCategoryName,
        currentCategory
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