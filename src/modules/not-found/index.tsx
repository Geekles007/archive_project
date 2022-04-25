import {memo} from "react";
import * as React from "react";
import styled from "styled-components";
import {Button} from "carbon-components-react";
import {useTranslation} from "react-i18next";
import {gray90} from "@carbon/colors";
import { useHistory } from "react-router";

interface NotFoundProps {

}

const NotFoundWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 3em);
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  strong {
    font-size: 8em;
    color: ${gray90};
  }
  
  h2 {
    margin: .5em 0 1em 0;
  }
`;

const NotFound = ({}: NotFoundProps) => {

    const {t} = useTranslation("translation", {useSuspense: false});
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <NotFoundWrapper>
            <strong>404</strong>
            <h2>{t("pageNotFoundText")}</h2>
            <Button onClick={goBack} kind={"primary"}>{t("goBackButtonText")}</Button>
        </NotFoundWrapper>
    );

}

export default memo<NotFoundProps>(NotFound);