import React, {memo} from 'react';
import styled from "styled-components";
import {Redirect, Route, Switch} from "react-router-dom";
import ContainerRouterController, {IContainerRoute} from "./controller";
import KeyBuilder from "../../utils/KeyBuilder";
import {useRouteMatch} from "react-router";
import RouteValidator from "../../common/route-validator";
import {ROUTES} from "../../constants";
import NotFound from "../not-found";

interface ContainerRouterProps {

}

const RouterWrapper = styled.div`
    
`;

const ContainerRouter = ({}: ContainerRouterProps) => {

    const {url} = useRouteMatch();

    return <RouterWrapper>
            <Switch>
                {
                    ContainerRouterController.routes.map((route: IContainerRoute) => {
                        return <RouteValidator permission={route.permission} exact={route.exact} key={KeyBuilder.build} path={`${url}/${route.route}`}>
                            {route.module}
                        </RouteValidator>
                    })
                }
            </Switch>
    </RouterWrapper>

}

export default memo(ContainerRouter);
