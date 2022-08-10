import React, { createContext, useContext } from "react";
import { useProvideAuth } from "./hooksAuth";

const authContext = createContext();

export function useAuth() {
    return useContext(authContext);
}

function ProvideAuth( {children} ) {
    const auth = useProvideAuth();
    return(
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}
export default ProvideAuth;