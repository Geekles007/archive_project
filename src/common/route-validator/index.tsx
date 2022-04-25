import {Redirect, Route} from "react-router-dom";
import {ROUTES} from "../../constants";
import React, {useEffect, useState} from "react";
import {useRouteMatch} from "react-router";

export default function RouteValidator({ children, permission, ...rest }: any) {

    const checkRoute = () => {
        if (permission) {
            // const permissions = JSON.parse(localStorage.getItem('permissions') as string ?? "[]");
            const permissions = ["USER_MODULE", "ROLE_PERMISSION_MODULE", "FILE_MANAGER_MODULE", "MANAGE_PERMISSIONS_ACTION"];
            return (permissions.includes(permission));
        } else {
            return true;
        }
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                checkRoute() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/" + ROUTES.notFound,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}