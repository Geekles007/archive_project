import React, {memo, useCallback} from 'react';
import styled from "styled-components";
import { getParams } from '../../../../utils/Formatting';
import {observer} from "mobx-react";
import RouteStore from "../../../../stores/RouteStore";
import {useTranslation} from "react-i18next";
import TitleHandler from "./children/title-handler";

const HeadTitleWrapper = styled.div`

`;

interface HeadTitleProps {

}

const HeadTitle = ({}: HeadTitleProps) => {

    const {t} = useTranslation("translation", {useSuspense: false});

    const getContent = useCallback(() => {
        const length = (RouteStore.currentUrl ?? "").split("/").length;
        const params = length > 3 ? getParams(RouteStore.currentUrl, 3) : getParams(RouteStore.currentUrl, 2);
        if(params === "") {
            return <h3>{t("Organisation's list")}</h3>;
        } else if (params) {
            return <TitleHandler length={length} id={params} />
        }
    }, [RouteStore.url, RouteStore.foodUrl])

    return <HeadTitleWrapper>
        {getContent()}
    </HeadTitleWrapper>

}

export default observer(HeadTitle);