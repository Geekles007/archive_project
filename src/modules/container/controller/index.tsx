import {
    CarbonIconType,
    DataBase16,
    Enterprise16,
    Home16,
    MachineLearningModel16,
    PresentationFile16,
    User16
} from "@carbon/icons-react";
import KeyBuilder from "../../../utils/KeyBuilder";
import {containerRoutes} from "../../../constants";
import {TFunction} from "i18next";

export interface ILink {
    id: string;
    name: string;
    route?: string;
    icon?: CarbonIconType;
    subRoutes?: ILink[];
}

class ContainerController {

    getLinks(t: TFunction) {
        return [
            // {
            //     id: KeyBuilder.build,
            //     name: "Dashboard",
            //     route: containerRoutes.DASHBOARD_ROUTE,
            //     icon: Home16
            // },
            {
                id: KeyBuilder.build,
                name: t("usersModuleTitle"),
                route: containerRoutes.USER_ROUTE,
                icon: User16
            },
            {
                id: KeyBuilder.build,
                name: t("grantsModuleTitle"),
                route: containerRoutes.ROLE_PERMISSION_ROUTE,
                icon: DataBase16
            },
            {
                id: KeyBuilder.build,
                name: t("filesModuleTitle"),
                route: containerRoutes.FILE_ROUTE,
                icon: PresentationFile16
            },
        ]
    }

}

export default new ContainerController();
