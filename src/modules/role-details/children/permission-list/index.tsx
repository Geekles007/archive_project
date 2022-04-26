import React, {memo} from "react";
import styled from "styled-components";
import IPermission from "../../../../models/IPermission";

const PermissionListWrapper = styled.div`

`;

interface PermissionListProps {
    data: IPermission[]
}

const PermissionList = ({}: PermissionListProps) => {

    return <PermissionListWrapper>
        PermissionList
    </PermissionListWrapper>

}

export default memo(PermissionList);
