import React, {memo, useEffect} from 'react';
import {EmptyWrapper} from "./empty-state-style/default";
import {CarbonIconType, Renew32, User32} from "@carbon/icons-react";
import {Button, Link} from "carbon-components-react";
import {Archive} from '@carbon/pictograms-react';

interface EmptyStateUiProps {
    title: string;
    text?: string;
    icon?: CarbonIconType;
    action?: () => void;
    actionTitle?: string;
}

const EmptyStateUI = ({
                                    action,
                                    title = "",
                                    text = "",
                                    icon,
                                    actionTitle = ""
                                }: EmptyStateUiProps) => {

    let elt: any = null;

    useEffect(() => {
        if(icon) {
            elt = React.createElement(icon);
        }
    }, [])

    return (
        <EmptyWrapper>
            <div className="little-text">
                <Archive/>
                <h4>{title}</h4>
                <span>{text}</span>
                {
                    action ?
                        <Button className={"pointer"} onClick={action}>{actionTitle}</Button> : null
                }
            </div>
        </EmptyWrapper>
    );

}

export default memo(EmptyStateUI);
