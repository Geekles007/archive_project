import { TFunction } from "i18next";
import {CustomProps} from "../../../common/custom-options-menu";
import { IRole } from "../../../models/IRole";

class RoleController {

    getActions(t: TFunction): Array<CustomProps> {
        return [
            {
                text: t("editText"),
                permission: "EDIT_ROLE_ACTION",
                func: (row: IRole) => {},
                options: {
                    itemText: "editText"
                }
            },
            {
                text: t("deleteText"),
                permission: "DELETE_ROLE_ACTION",
                func: (row: IRole) => {},
                options: {
                    itemText: "deleteText"
                }
            },
            {
                text: t("managePermissionsText"),
                permission: "MANAGE_PERMISSIONS_ACTION",
                func: (row: IRole) => {},
                options: {
                    itemText: "managePermissionsText"
                }
            },
        ]
    }

}

export default new RoleController();