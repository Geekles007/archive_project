import {memo} from "react";
import * as React from "react";
import EmptyStateUI from "../../../empty-state";

interface FallBackResultProps {
    onReset: (...args: any) => void;
    title?: string;
    description?: string;
    actionTitle?: string
}

const FallBackResult = ({onReset, title, description, actionTitle}: FallBackResultProps) => {

    return (
        <>
            <EmptyStateUI
                title={title ?? "Не онлайн"}
                text={description ?? "Этот модуль должен находиться в обслуживании"}
                action={onReset}
                actionTitle={actionTitle ?? "Пожалуйста, попробуйте еще раз"}
            />
        </>
    );

}

export default memo<FallBackResultProps>(FallBackResult);