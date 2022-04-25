import {memo, useEffect, useState} from "react";
import * as React from "react";
import styled from "styled-components";

interface PermissionHandlerProps {
    permissionTitle?: string;
    children: React.ReactNode
}

const PermissionHandler = ({permissionTitle, children}: PermissionHandlerProps) => {

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        if (permissionTitle) {
            // const permissions = JSON.parse(localStorage.getItem('permissions') as string ?? "[]");
            const permissions = ["USER_MODULE", "ROLE_PERMISSION_MODULE", "FILE_MANAGER_MODULE",
                "EDIT_ROLE_ACTION", "MANAGE_PERMISSIONS_ACTION", "DELETE_ROLE_ACTION"];
            setVisible(permissions.includes(permissionTitle));
        } else {
            setVisible(true);
        }
    }, [permissionTitle])

    return (
        <>
            {
                visible ? children : null
            }
        </>
    );

}

export default memo<PermissionHandlerProps>(PermissionHandler);