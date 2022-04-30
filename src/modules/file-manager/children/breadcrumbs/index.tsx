import { Breadcrumb, BreadcrumbItem } from "carbon-components-react";
import React, {memo} from "react";
import styled from "styled-components";
import {gray80} from "@carbon/colors";
import {Folder20} from "@carbon/icons-react";

const BreadCrumbsWrapper = styled.div`
  width: 100%;
  background-color: ${gray80};
  margin-top: 1em;
  
  display: flex;
  align-items: center;
  
  padding: 1em;
  
  ._bread {
    margin-left: 1em;
  }
`;

interface BreadCrumbsProps {

}

const BreadCrumbs = ({}: BreadCrumbsProps) => {

    return <BreadCrumbsWrapper>
        <Folder20 />
        <Breadcrumb className={"_bread"}>
            <BreadcrumbItem href="/">Breadcrumb 1</BreadcrumbItem>
            <BreadcrumbItem href="/">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="/">Breadcrumb 3</BreadcrumbItem>
        </Breadcrumb>
    </BreadCrumbsWrapper>

}

export default memo(BreadCrumbs);
