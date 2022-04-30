import React, {memo} from "react";
import styled from "styled-components";

const BreadCrumbsWrapper = styled.div`

`;

interface BreadCrumbsProps {

}

const BreadCrumbs = ({}: BreadCrumbsProps) => {

    return <BreadCrumbsWrapper role={"breadcrumb"}>
        BreadCrumbs
    </BreadCrumbsWrapper>

}

export default memo(BreadCrumbs);
