import React, {ChangeEvent, memo} from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Button, Search} from "carbon-components-react";
import {Add16} from "@carbon/icons-react";
import MainDir from "./children/maindir";
import BreadCrumbs from "./children/breadcrumbs";

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
    const {t} = useTranslation("translation", {useSuspense: false});

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {

    }

    return <FileManagerWrapper>
        <div className="_flex head">
            <h3>{t("fileManagerTitle")}</h3>
            <div className="_flex">
                <Search
                    labelText={""}
                    id="search-role"
                    className={"search"}
                    placeHolderText={t("searchText")}
                    onChange={onChangeHandler}
                />
                <Button kind={"primary"} tooltipPosition={"left"} iconDescription={t("createNewFolderText")} hasIconOnly renderIcon={Add16} />
            </div>
        </div>
        <BreadCrumbs />
        <MainDir />
    </FileManagerWrapper>

}

export default memo(FileManager);
