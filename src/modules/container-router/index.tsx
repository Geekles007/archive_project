import React, {memo} from 'react';
import styled from "styled-components";
import {Redirect, Route, Switch} from "react-router-dom";
import ContainerRouterController, {IContainerRoute} from "./controller";
import KeyBuilder from "../../utils/KeyBuilder";
import {useRouteMatch} from "react-router";

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
                        return <Route exact={route.exact} key={KeyBuilder.build} path={`${url}/${route.route}`}>
                            {route.module}
                        </Route>
                    })
                }
            </Switch>
    </RouterWrapper>

}

export default memo(ContainerRouter);
