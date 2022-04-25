import React, {memo} from "react";
import styled from "styled-components";

const UserModuleWrapper = styled.div`
  
`;

interface UserModuleProps {

}

const UserModule = ({}: UserModuleProps) => {

    return <UserModuleWrapper>
        UserModule
    </UserModuleWrapper>

}

export default memo(UserModule);
