import {Redirect, Route} from "react-router-dom";
import React from 'react';
import {createContext, useContext, useState} from "react";
import {ACCESS_TOKEN, ROUTES} from "../../constants";

const authContext = createContext<{user: null | string}>({
    user: ""
});

function useProvideAuth() {
    const [user] = useState(localStorage.getItem(ACCESS_TOKEN) ?? null);

    return {
        user,
    };
}

export function ProvideAuth({ children }: any) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

function useAuth() {
    return useContext(authContext);
}

export default function PrivateRoute({ children, ...rest }: any) {
    let auth: any = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: ROUTES.login,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
