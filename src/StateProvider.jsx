import React, { createContext, useContext, useReducer } from "react";

export const AppContext = createContext();

const StateProvider = ({ children, initialState, reducer }) => {
    return (
        <AppContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AppContext.Provider>
    );
};

// export const useAppContext = useContext(AppContext);

export default StateProvider;
