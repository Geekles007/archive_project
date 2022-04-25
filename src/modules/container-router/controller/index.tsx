import DashboardUI from "../../dashboard";
import {containerRoutes} from "../../../constants";
import OrganizationModule from "../../organization-module";
import ErrorBoundary from "../../../common/error-boundary";
import RestaurantModule from "../../restaurant-module";

export interface IContainerRoute {
    module: JSX.Element;
    route: string;
    exact?: boolean;
}

class ContainerRouterController {

    routes: IContainerRoute[] = [
        {
            module: <ErrorBoundary><OrganizationModule /></ErrorBoundary>,
            route: containerRoutes.ORG_ROUTE,
            exact: false
        },
        // {
        //     module: <DashboardUI />,
        //     route: containerRoutes.DASHBOARD_ROUTE,
        //     exact: false
        // }
    ]

}

export default new ContainerRouterController();