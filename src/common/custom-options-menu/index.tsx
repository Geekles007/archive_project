import { memo } from "react"
import * as React from 'react';
import { OverflowMenu, OverflowMenuItem, OverflowMenuItemButtonProps } from "carbon-components-react";

import { Route } from 'react-router-dom'
import {useTranslation} from "react-i18next";
import KeyBuilder from "../../utils/KeyBuilder";

export type CustomProps = {
    permission?: string;
    text?: string;
    options: OverflowMenuItemButtonProps,
    func: (row: any | undefined) => void
}

type CustomOptionsMenuProps = {
    menus?: CustomProps[],
    flipped?: boolean,
    row?: any
}

const CustomOptionsMenu: React.FC<CustomOptionsMenuProps> = ({menus, flipped = false, row}: CustomOptionsMenuProps) => {
    const {t} = useTranslation('translation', {useSuspense: false})

    return (
        <Route>
            <OverflowMenu flipped={flipped}>
                {
                    menus?.map((item: CustomProps) => {
                        return (
                            // <PermissionHandler permission={item.permission} key={buildKey()}>
                                <OverflowMenuItem itemText={t(item.text || "") as string} onClick={() => item.func(row)} key={KeyBuilder.build}/>
                            // </PermissionHandler>
                        );
                    })
                }
            </OverflowMenu>
        </Route>
    );

}

export default memo(CustomOptionsMenu);
