import React, {memo} from 'react';
import styled from "styled-components";
import {Redirect, Route, Switch} from "react-router-dom";
import ContainerRouterController, {IContainerRoute} from "./controller";
import KeyBuilder from "../../utils/KeyBuilder";

interface ContainerRouterProps {

}

const RouterWrapper = styled.div`
    
`;

const ContainerRouter = ({}: ContainerRouterProps) => {

    return <RouterWrapper>
            <Switch>
                {
                    ContainerRouterController.routes.map((route: IContainerRoute) => {
                        return <Route exact={route.exact} key={KeyBuilder.build} path={route.route}>
                            {route.module}
                        </Route>
                    })
                }
                {/*<Route path={""}>*/}
                {/*    <Redirect to={containerRoutes.DASHBOARD_ROUTE} />*/}
                {/*</Route>*/}
            </Switch>
    </RouterWrapper>

}

export default memo(ContainerRouter);
