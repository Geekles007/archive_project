import React, {memo} from "react";
import styled from "styled-components";
import FolderCard from "../folder-card";
import {gray80} from "@carbon/colors";
import {Column, Grid, Row} from "carbon-components-react";

const MainDirWrapper = styled.div`
  height: calc(100vh - 14em);
  overflow-y: scroll;
  width: 100%;
  
  .bx--grid {
    padding-left: 1.25em;
    padding-right: 1.25em;
  }
`;

interface MainDirProps {

}

const MainDir = ({}: MainDirProps) => {

    return <MainDirWrapper>
        <Grid narrow fullWidth>
            <Row>
                {
                    [1,2,3,4,5,6,7].map(item => {
                        return <Column lg={2}>
                            <FolderCard />
                        </Column>
                    })
                }
            </Row>
        </Grid>
    </MainDirWrapper>

}

export default memo(MainDir);
