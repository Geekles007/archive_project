import React, {memo} from "react";
import styled from "styled-components";

const MainDirWrapper = styled.div`

`;

interface MainDirProps {

}

const MainDir = ({}: MainDirProps) => {

    return <MainDirWrapper>
        MainDir
    </MainDirWrapper>

}

export default memo(MainDir);
