import React, {ChangeEvent, memo} from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Button, Search} from "carbon-components-react";
import {Add16} from "@carbon/icons-react";
import MainDir from "./children/maindir";
import BreadCrumbs from "./children/breadcrumbs";
import MainFolderHandler from "./children/main-folder-handler";

const FileManagerWrapper = styled.div`
  padding: 1em;
  
  .head {
    height: 3.5em;
  }
  
  ._flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

interface FileManagerProps {

}

const FileManager = ({}: FileManagerProps) => {

    return <FileManagerWrapper>
        <MainFolderHandler />
    </FileManagerWrapper>

}

export default memo(FileManager);
