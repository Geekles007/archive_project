import React, {memo} from "react";
import styled from "styled-components";
import HeaderPanel from "../../common/header-panel";
import UsersHandler from "./children/users-handler";
import {useTranslation} from "react-i18next";

const UserModuleWrapper = styled.div`
  .container {
    padding: 1em;
  }
`;

interface UserModuleProps {

}

const UserModule = ({}: UserModuleProps) => {

    const {t} = useTranslation("translation", {useSuspense: false})

    return (
        <UserModuleWrapper>
            <HeaderPanel title={t("userListText")}
                         description={t("userListDescriptionText")}
                         containerClass={"container"}>
                <UsersHandler />
            </HeaderPanel>
        </UserModuleWrapper>
    );

}

export default memo(UserModule);
