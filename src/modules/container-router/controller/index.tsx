import {containerRoutes} from "../../../constants";
import ErrorBoundary from "../../../common/error-boundary";
import UserModule from "../../user-module";
import RolePermissionModule from "../../roles-permissions-module";

export interface IContainerRoute {
    module: JSX.Element;
    route: string;
    exact?: boolean;
    permission?: string;
}

class ContainerRouterController {

    routes: IContainerRoute[] = [
        {
            module: <ErrorBoundary><UserModule /></ErrorBoundary>,
            route: containerRoutes.DASHBOARD_ROUTE,
            permission: "USER_MODULE",
            exact: true
        },
        {
            module: <ErrorBoundary><UserModule /></ErrorBoundary>,
            route: containerRoutes.USER_ROUTE,
            permission: "USER_MODULE",
            exact: true
        },
        {
            module: <ErrorBoundary><RolePermissionModule/></ErrorBoundary>,
            route: containerRoutes.ROLE_PERMISSION_ROUTE,
            permission: "ROLE_PERMISSION_MODULE",
            exact: false
        },
        {
            module: <ErrorBoundary><>Files</></ErrorBoundary>,
            route: containerRoutes.FILE_ROUTE,
            permission: "FILE_MANAGER_MODULE",
            exact: false
        },
    ]

}

export default new ContainerRouterController();
