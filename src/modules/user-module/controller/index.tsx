import GenericFormUI, {GenericFormUIProps} from "../../../common/generic-form";
import {
    DataTableCustomSelectionData,
    DataTableCustomSelectionProps,
    DataTableRow,
    DenormalizedRow
} from "carbon-components-react";
import {TYPEINPUT} from "../../../common/generic-form/constants";
import {ApiClient} from "../../../services/config/api-client";
import {DateTime} from "luxon";
import {ShapeOf} from "carbon-components-react/typings/shared";
import KeyBuilder from "../../../utils/KeyBuilder";
import DialogStore from "../../../stores/DialogStore";
import GenericConfirmation, {GenericConfirmationProps} from "../../../common/generic-confirmation";
import {IUser} from "../../../models/IUser";
import ProfileUI from "../../../common/Profile";
import {IProfile} from "../../../models/IProfile";
import {CustomProps} from "../../../common/custom-options-menu";
import * as yup from "yup"
import {TFunction} from "i18next";

class UserController {

    getHeaders(t: TFunction) {
        return [
            {
                header: t("profileText"),
                key: "profile"
            },
            {
                header: t("phoneNumberText"),
                key: "phone"
            }
        ];
    }

    getCustomData(list: IUser[], refetch?: any) {

        return list.map(item => {
            const profile: IProfile = {
                name: (item?.lastname ?? "") + " " + (item?.firstname ?? "") + " " + (item?.middlename ?? ""),
                email: item?.email,
                photo: item?.photo
            }
            return {
                id: item?.id,
                profile: <ProfileUI profile={profile} />,
                phone: item?.phone ?? ""
            }
        });
    }

    get MySchema() {
        return yup.object().shape({
            suspendedTill: yup.string(),
        });
    }

    getExpandedRows(type?: string,
                    data?: Readonly<any>,
                    noSelection?: boolean,
                    parent?: DenormalizedRow,
                    getSelectionProps?: <E extends object = {}>(
                        data?: ShapeOf<DataTableCustomSelectionData, E>
                    ) => ShapeOf<DataTableCustomSelectionProps<DataTableRow>, E> | ShapeOf<DataTableCustomSelectionProps<never>, E>,
                    menus?: any[]) {

        return <>
            {/*<ExpandedDetailsUser id={data?.id} />*/}
        </>

    }

    getBatchActions(refetch: any) {
        return [];
    }

    getActions(t: TFunction, refetch: any): CustomProps[] {
        return [
            {
                permission: "",
                options: {
                    itemText: t("editText") as string
                },
                text: t("editText"),
                func: (row: any) => {
                    DialogStore.openFromOutside({
                        title: t("editModalTitle"),
                        content: <></>,
                        size: 'sm'
                    });
                }
            }
        ];
    }

    paginatorChange(e: any) {}
    
}

export default new UserController();