import React, {memo} from "react";
import styled from "styled-components";
// import Container from "../container";
import {ROUTES} from "../../constants";
import LoginUI from "../login";
import PrivateRoute from "../../common/PrivateRoute";
import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";

const RouteManagerWrapper = styled.div`

`;

interface RouteManagerProps {

}

const RouteManager = ({}: RouteManagerProps) => {

    return <RouteManagerWrapper>
        <Router>
            <Switch>
                <Route exact path={`/${ROUTES.login}`}>
                    <LoginUI/>
                </Route>
                <PrivateRoute path={`/${ROUTES.main}`}>
                    {/*<Container/>*/}
                    <h4>Container</h4>
                </PrivateRoute>
                <Route path="*">
                    <Redirect to={`/${ROUTES.login}`}/>
                </Route>
            </Switch>
        </Router>
    </RouteManagerWrapper>

}

export default memo(RouteManager);
