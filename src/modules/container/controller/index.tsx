import {CarbonIconType, DataBase16, Enterprise16, Home16, MachineLearningModel16, User16} from "@carbon/icons-react";
import KeyBuilder from "../../../utils/KeyBuilder";
import {containerRoutes} from "../../../constants";

export interface ILink {
    id: string;
    name: string;
    route?: string;
    icon?: CarbonIconType;
    subRoutes?: ILink[];
}

class ContainerController {

    links: ILink[] = [
        // {
        //     id: KeyBuilder.build,
        //     name: "Dashboard",
        //     route: containerRoutes.DASHBOARD_ROUTE,
        //     icon: Home16
        // },
        {
            id: KeyBuilder.build,
            name: "Organizations",
            route: containerRoutes.ORG_ROUTE,
            icon: Enterprise16
        },
    ]

}

export default new ContainerController();