import React, { createContext, useState } from 'react';

// Create the context
const PopContext = createContext();

// Create a provider component to wrap your app
const PopContextProvider = ({ children }) => {
    const [emailPop, setEmailPop] = useState(false);
    const [portPop, setPortPop] = useState(false);

    const toggleEmailPop = () => {
        setEmailPop(prevState => !prevState);
    };

    const togglePortPop = () => {
        setPortPop(prevState => !prevState);
    };

    return (
        <PopContext.Provider value={{ emailPop, toggleEmailPop, portPop, togglePortPop }}>
            {children}
        </PopContext.Provider>
    );
};

export { PopContext, PopContextProvider };