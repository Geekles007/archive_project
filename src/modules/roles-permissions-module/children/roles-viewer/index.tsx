import {memo} from "react";
import * as React from "react";
import styled from "styled-components";
import {IUser} from "../../../../models/IUser";
import {Grid, Row, Column} from "carbon-components-react";
import DDSCard from "@carbon/ibmdotcom-web-components/es/components-react/card/card";
import DDSCardHeading from "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading";
import {ArrowDownRight32} from "@carbon/icons-react";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";
import {IRole} from "../../../../models/IRole";
import RoleCard from "../role-card";
import KeyBuilder from "../../../../utils/KeyBuilder";

interface RolesViewerProps {
    refetch: any;
    data: Array<IRole>;
}

const RolesViewerWrapper = styled.div`
    margin-top: 1em;
  
    .bx--grid {
      padding-left: 1.2em;
      padding-right: 1.2em;
    }
`;

const RolesViewer = ({refetch, data}: RolesViewerProps) => {

    return (
        <RolesViewerWrapper>
            <Grid fullWidth condensed>
                <Row condensed>
                    {
                        data?.map((item) => {
                            return <Column key={KeyBuilder.build} lg={3} md={3}>
                                <RoleCard role={undefined} />
                            </Column>
                        })
                    }
                </Row>
            </Grid>
        </RolesViewerWrapper>
    );

}

export default memo<RolesViewerProps>(RolesViewer);