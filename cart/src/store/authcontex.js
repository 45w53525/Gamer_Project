import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedin: false,
    login: (token) => { },
    logout: () => { },
});

export const AuthContextProvider = (props) => {
    const getToken = localStorage.getItem('token');
    const [token, setToken] = useState(getToken);


    const isLoggedin = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    const contextValue = {
        token: token,
        isLoggedin: isLoggedin,
        login: loginHandler,
        logout: logoutHandler


    }


    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};


export default AuthContext;