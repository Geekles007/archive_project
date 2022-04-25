import {containerRoutes} from "../../../constants";
import ErrorBoundary from "../../../common/error-boundary";
import UserModule from "../../user-module";

export interface IContainerRoute {
    module: JSX.Element;
    route: string;
    exact?: boolean;
}

class ContainerRouterController {

    routes: IContainerRoute[] = [
        {
            module: <ErrorBoundary><UserModule /></ErrorBoundary>,
            route: containerRoutes.DASHBOARD_ROUTE,
            exact: true
        },
        {
            module: <ErrorBoundary><UserModule /></ErrorBoundary>,
            route: containerRoutes.USER_ROUTE,
            exact: true
        },
        {
            module: <ErrorBoundary><>R & Permissions</></ErrorBoundary>,
            route: containerRoutes.ROLE_PERMISSION_ROUTE,
            exact: false
        },
        {
            module: <ErrorBoundary><>Files</></ErrorBoundary>,
            route: containerRoutes.FILE_ROUTE,
            exact: false
        },
    ]

}

export default new ContainerRouterController();
