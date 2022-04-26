import {memo} from "react";
import * as React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import HeaderPanel from "../../../../common/header-panel";
import {useParams} from "react-router";

interface RoleDetailsProps {

}

const RoleDetailsWrapper = styled.div`

`;

const RoleDetails = ({}: RoleDetailsProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});
    const {id} = useParams<{id: string}>();



    return (
        <RoleDetailsWrapper>
            <HeaderPanel title={t("roleListText")}
                         description={t("roleListDescriptionText")}
                         containerClass={"container"}>

            </HeaderPanel>
        </RoleDetailsWrapper>
    );

}

export default memo<RoleDetailsProps>(RoleDetails);