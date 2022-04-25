import {memo, useRef, useState} from 'react';
import * as React from "react";
import {useTranslation} from "react-i18next";
import DialogStore from "../../../../stores/DialogStore";
import LogoutModuleUI from "../../../logout-module";
import useOutsideClick from "../../../../common/outside-click";
import {UserAvatar20} from "@carbon/icons-react";
import DropdownMenu from "../../../../common/dropdown-menu";
import {IMenu} from "../../index";
import styled from "styled-components";
import {HeaderGlobalAction} from "carbon-components-react";

interface UserActionProps {

}

const CustomHeaderGlobalAction = styled(HeaderGlobalAction)`
    position: relative;
    
    .priority{
        z-index: 9;
    }
`;

const UserAction = ({}: UserActionProps) => {

    const wrapperRef = useRef<any>(null);
    const [activated, setActivated] = useState<boolean>(false);
    const {t} = useTranslation("translation", {useSuspense: false});

    const menus: IMenu[] = [
        // {
        //     title: t("profile-menu-text")
        // },
        {
            title: t("Logout"),
            action: () => {
                DialogStore.setInfos({
                    title: t('Logout'),
                    content: <LogoutModuleUI />,
                    size: "sm"
                })
                DialogStore.setOpen(true);
            }
        },
    ];

    useOutsideClick(wrapperRef, () => {
        setActivated(false);
    })

    return <CustomHeaderGlobalAction ref={wrapperRef} aria-label="" onClick={() => setActivated(!activated)}>
        <UserAvatar20 className={"priority"} />
        <DropdownMenu menus={menus} className={activated ? "activated" : ""} />
    </CustomHeaderGlobalAction>

}

export default memo(UserAction);