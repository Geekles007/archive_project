import {Breadcrumb, BreadcrumbItem, Button} from "carbon-components-react";
import React, {memo} from "react";
import styled from "styled-components";
import {gray80} from "@carbon/colors";
import {Folder20, Renew16} from "@carbon/icons-react";
import {useTranslation} from "react-i18next";

const BreadCrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  
  ._breads {
    width: 100%;
    background-color: ${gray80};

    display: flex;
    align-items: center;

    padding: 1em;

    ._bread {
      margin-left: 1em;
    }
  }
  
`;

interface BreadCrumbsProps {
    refetch?: any;
}

const BreadCrumbs = ({refetch}: BreadCrumbsProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});

    return <BreadCrumbsWrapper>
        <div className="_breads">
            <Folder20 />
            <Breadcrumb className={"_bread"}>
                <BreadcrumbItem href="/">Breadcrumb 1</BreadcrumbItem>
                <BreadcrumbItem href="/">Breadcrumb 2</BreadcrumbItem>
                <BreadcrumbItem href="/">Breadcrumb 3</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <Button hasIconOnly kind={"secondary"} tooltipPosition={"left"} iconDescription={t("refreshText")} onClick={refetch} renderIcon={Renew16} />
    </BreadCrumbsWrapper>

}

export default memo(BreadCrumbs);
