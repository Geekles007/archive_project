import React, {memo} from "react";
import styled from "styled-components";
import FolderCard from "../folder-card";
import {gray80} from "@carbon/colors";
import {Column, Grid, Row} from "carbon-components-react";
import {IFolder} from "../../../../models/IFolder";
import KeyBuilder from "../../../../utils/KeyBuilder";

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
    data?: IFolder[];
    refetch?: any;
}

const MainDir = ({data, refetch}: MainDirProps) => {

    return <MainDirWrapper>
        <Grid narrow fullWidth>
            <Row>
                {
                    (data ?? [1,2,3,4,5]).map(item => {
                        return <Column key={KeyBuilder.build} xlg={2} lg={3} md={4}>
                            <FolderCard />
                        </Column>
                    })
                }
            </Row>
        </Grid>
    </MainDirWrapper>

}

export default memo(MainDir);
