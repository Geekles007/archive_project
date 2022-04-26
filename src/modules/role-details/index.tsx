import {memo} from "react";
import * as React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import HeaderPanel from "../../common/header-panel";
import ToolbarContentUI from "../../common/datatable/components/toolbar/components/toolbar-content";
import {Search} from "carbon-components-react";
import {FIND_ROLE} from "../../services/queries/role";
import {useQuery} from "@apollo/client";
import {gray90} from "@carbon/colors";
import BatchActionsPermissions from "./children/batch-actions-permissions";

interface RoleDetailsProps {

}

const RoleDetailsWrapper = styled.div`
  .container {
    padding: 1em;
  }
  .search {
    background-color: ${gray90};
  }
`;

const RoleDetails = ({}: RoleDetailsProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});
    const {id} = useParams<{id: string}>();

    const {data, loading, error, refetch} = useQuery(FIND_ROLE, {
        fetchPolicy: "no-cache",
        variables: {
            id: id
        }
    })

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <RoleDetailsWrapper>
            <HeaderPanel title={t("roleListText")}
                         description={t("roleListDescriptionText")}
                         containerClass={"container"}>

            </HeaderPanel>
        </RoleDetailsWrapper>
    );

}

export default memo<RoleDetailsProps>(RoleDetails);
