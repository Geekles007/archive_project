import {memo, MutableRefObject} from "react";
import {CarbonIconType} from "@carbon/icons-react";
import {MenuWrapper} from "./style/default";
import * as React from "react";
import KeyBuilder from "../../utils/KeyBuilder";

export interface IMenu {
    title: string;
    icon?: CarbonIconType;
    action?: () => void;
}

interface DropdownMenuProps {
    menus: any[],
    className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({menus, className = ""}) => {

    return (
        <MenuWrapper className={className}>
            <ul>
                {
                    menus.map(item => (
                        <li key={KeyBuilder.build} onClick={item.action}>{item.title}</li>
                    ))
                }
            </ul>
        </MenuWrapper>
    );

}

export default memo(DropdownMenu);
