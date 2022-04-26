import React, {memo} from "react";
import styled from "styled-components";
import {Button, Link, Tile} from "carbon-components-react";
import {useTranslation} from "react-i18next";
import { red50 } from "@carbon/colors";

const BatchActionsPermissionsWrapper = styled(Tile)`
  margin-top: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1em;
  
  a {
    cursor: pointer;
    
    &.cancel-button {
      color: ${red50}
    }
  }
`;

interface BatchActionsPermissionsProps {

}

const BatchActionsPermissions = ({}: BatchActionsPermissionsProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});

    return <BatchActionsPermissionsWrapper>
        <Link>{t("deleteText")}</Link>
        &nbsp; | &nbsp;
        <Link className={"cancel-button"}>{t("cancelText")}</Link>
    </BatchActionsPermissionsWrapper>

}

export default memo(BatchActionsPermissions);
