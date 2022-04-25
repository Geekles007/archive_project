import {memo} from "react";
import * as React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import HeaderPanel from "../../common/header-panel";
import RolesHandler from "./children/roles-handler";
import {Redirect, Route, Switch} from "react-router-dom";
import {useRouteMatch} from "react-router";
import RoleDetails from "./children/role-details";
import RouteValidator from "../../common/route-validator";
import {ROUTES} from "../../constants";
import NotFound from "../not-found";

interface RolePermissionModuleProps {

}

const RolePermissionModuleWrapper = styled.div`
  .container {
    padding: 1em;
  }
`;

const RolePermissionModule = ({}: RolePermissionModuleProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});
    const {url} = useRouteMatch();

    return (
        <RolePermissionModuleWrapper>
            <Switch>
                <Route exact path={`${url}`}>
                    <HeaderPanel title={t("roleListText")}
                                 description={t("roleListDescriptionText")}
                                 containerClass={"container"}>
                        <RolesHandler />
                    </HeaderPanel>
                </Route>
                <RouteValidator permission={"MANAGE_PERMISSIONS_ACTION"} path={`${url}/:id`}>
                    <RoleDetails />
                </RouteValidator>
            </Switch>
        </RolePermissionModuleWrapper>
    );

}

export default memo<RolePermissionModuleProps>(RolePermissionModule);