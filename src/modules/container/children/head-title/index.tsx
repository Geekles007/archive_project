import React, {memo, useCallback} from 'react';
import styled from "styled-components";
import {observer} from "mobx-react";
import {useTranslation} from "react-i18next";

const HeadTitleWrapper = styled.div`

`;

interface HeadTitleProps {

}

const HeadTitle = ({}: HeadTitleProps) => {

    const {t} = useTranslation("translation", {useSuspense: false});

    return <HeadTitleWrapper>
        {t("appName")}
    </HeadTitleWrapper>

}

export default observer(HeadTitle);
